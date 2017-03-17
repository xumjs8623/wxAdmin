import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/login/login'
import Admin from 'components/admin/Admin'
import tableTest from 'components/test/tableTest'
import formGroup from 'components/formGroup/form'
import upload from 'components/upload/upload'
import alert from 'components/confirm/confirm'
// import alertGroup from 'components/formGroup/form'
Vue.use(Router)

export default new Router({
  // mode: 'history', // 修改路由模式，history跟原有路由风格一样
  routes: [{
    path: '/',
    name: '首页',
    component: Login
  }, {
    path: '/admin',
    name: '主页',
    component: Admin,
    title: '主页',
    // iconCls: 'el-icon-message'
    children: [{
      path: '',
      component: tableTest
    }, {
      path: 'list',
      component: tableTest
    }, {
      path: 'form',
      component: formGroup
    }, {
      path: 'alert',
      component: alert
    }, {
      path: 'upload',
      component: upload
    }]
  }]
})
