// 左侧菜单栏
export const menus = {
  code: 1,
  data: [{
    name: '组件展示',
    icon: 'el-icon-information',
    index: '1',
    children: [{
      name: '列表组件',
      url: '/admin/list',
      index: '1-1'
    }, {
      name: '表单组件',
      url: '/admin/form',
      index: '1-2'
    }, {
      name: '上传',
      url: '/admin/upload',
      index: '1-3'
    }, {
      name: '弹窗组件',
      url: '/admin/alert',
      index: '1-4'
    }]
  },
  { name: '导航二', icon: 'el-icon-picture', index: '2' },
  { name: '导航三', icon: 'el-icon-message', index: '3' }
  ]
}
// 用户信息
export const userInfo = {
  code: 1,
  data: {
    name: 'administrator',
    role: 1
  }
}
// 登录接口
export const login = {
  code: 1,
  msg: '登录成功'
}
