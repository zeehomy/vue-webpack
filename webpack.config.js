const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
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
          'css-loader'      // 读取css文件，解析css语法，不涉及如何在html中使用.loader为逐层负责处理
        ]
      },

      // 每种文件都需要重新配置全部的所需的loader
      {
        test: /\.styl/,                     // less sass
        use: [
          'css-loader',
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
      }
    ]
  },
  plugins:[    
    new VueLoaderPlugin()     //new一个实例
  ]
}