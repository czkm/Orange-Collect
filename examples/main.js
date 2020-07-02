import Vue from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue-highlightjs'
import '../packages/theme/font/iconfont.css';
import 'highlight.js/styles/atom-one-dark.css'

import '../util';

import '../packages/theme/base.scss';

import shnUI from '../packages/index'

import router from './router'

Vue.config.productionTip = false
Vue.use(VueHighlightJS) 

Vue.use(shnUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')