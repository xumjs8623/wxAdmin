import Mock from 'mockjs'
Mock.mock('/getUser?name=1', 'get', {
  name: '111'
})
