import axios from 'axios'
// let base = ' https://cnodejs.org/api/v1'
let base = 'http://localhost:3000'
// let base = 'https://api.xuminjun.com'
// 登录接口
export const login = params => { return axios.post(base + '/api/login', params).then(res => res.data).catch(error => { console.log(error) }) }
// 获取nodejs资讯
export const getTopics = params => { return axios.get('https://cnodejs.org/api/v1/topics').then(res => res.data).catch(error => { console.log(error) }) }
// 获取用户信息
export const getUser = params => { return axios.get('/getUser', {params: params}).then(res => res.data).catch((error) => { console.log(error) }) }
// 获取左侧菜单列表
export const getMenus = params => { return axios.get('/getMenus').then(res => res.data).catch(error => { console.log(error) }) }
