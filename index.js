import Vue from 'vue'
import App from './src/app.vue'
import './src/assets/styles/globel.styl'

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: h => h(App)       // createApp
}).$mount(root);