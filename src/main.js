// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入element-ui组件，样式需要单独引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import router from './router'
import store from './store/index.js'
import mock from './mock'
// import { state } from '../store/modules/user'
Vue.use(ElementUI)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  mock,
  template: '<App/>',
  components: { App }
})
// 登录控制
router.beforeEach((to, from, next) => {
  // ...
  console.log(to.path)
  switch (to.path) {
    case '/':
      next()
      break
    default:
      if (store.getters.getUser) {
        next()
      } else {
        next('/')
      }
      break
  }
})
