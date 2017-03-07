import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Admin from 'components/admin/Admin'
import tableTest from 'components/test/tableTest'
Vue.use(Router)

export default new Router({
  // mode: 'history', // 修改路由模式，history跟原有路由风格一样
  routes: [{
    path: '/',
    name: '首页',
    component: Hello
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
    }]
  }]
})
