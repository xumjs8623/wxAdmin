import Mock from 'mockjs'
import * as data from './data'
// 获取用户信息
Mock.mock('/getUser?name=1', 'get', data.userInfo)
// 登录访问接口
Mock.mock('/login', 'post', data.login)
// 获取左侧菜单
Mock.mock('/getMenus', 'get', data.menus)

