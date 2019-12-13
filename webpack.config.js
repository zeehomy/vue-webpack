const path = require('path');

// 也有webpack内置的plugin
const webpack = require('webpack');

// plugin有通过npm安装的
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === "development";

const config = {
  target: 'web',
  entry: path.join(__dirname, 'index.js'),    // __dirname: 本文件的目录（根目录）; join方法拼接两个参数;path.join: 绝对路径
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },

  // “模式”选项
  mode: 'development',

  // webpack只原生处理ES5，超出处理范围的要使用loader
  module: {
    rules: [
      {
        test: /\.vue$/,    // 正则匹配文件类型
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [              // 应该还需要style-loader
          'style-loader',
          {
            loader: 'css-loader',  // 读取css文件，解析css语法，不涉及如何在html中使用.loader为逐层负责处理
            options: {
              importLoaders: 1,     // @import
            }
          },     
          {
            loader: 'postcss-loader'
          }
        ]
      },

      // 每种文件都需要重新配置全部的所需的loader
      {
        test: /\.styl/,                // less sass    经测试同时处理vue中的stylus代码，postcss也同时对vue组件生效
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'         // 一层一层往上处理；每个loader只处理自己关心的部分
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',         // 各种图片使用url-loader
            options: {
              limit: 1024,                // 让1KB以内的图片才可编码为base64, 否则会以名称输出文件
              name: '[name]-aaa.[ext]'
            }
          }
        ]
      },
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',     // babel-loader用于处理jsx文件代码
          }
        ]
      }
    ]
  },
  plugins:[    
    new VueLoaderPlugin(),      // new一个实例,必须于vue-loader配套使用
    new HTMLPlugin()            // 决定能否生成index.html渲染
  ]
}

if (isDev) {
  config.devtool = '#cheap-module-eval-source-map'     // 可以配置不同模式的source map，不同的模式有不同的优点
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',    // 使用0.0.0.0既可以用localhost访问，又可以用IP访问
    overlay: {
      errors: true      // 启动错误提示遮罩层
    },
    // open: true,
    // historyApiFallback    //帮助把devServer不认识的地址都映射到index.html（通过配置实现）
    hot: true        // 只渲染更新的组件。要配合plugin使用
  };

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),   // hot: true需要此plugin
    // 还可以添加如何处力热加的代码
    new webpack.NoEmitOnErrorsPlugin()      // 减少不需要的错误信息展示
  );
}

module.exports = config;