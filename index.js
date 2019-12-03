import Vue from 'vue'
import App from './src/app.vue'

import './src/assets/styles/test.css'      // 其中的url由url-loader处理
import './src/assets/styles/test-stylus.styl'
import './src/assets/images/bg.jpeg'       // 由file-loader处理

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: h => h(App)       // createApp
}).$mount(root);