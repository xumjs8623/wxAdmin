import axios from 'axios'
let base = ' https://cnodejs.org/api/v1'
// 获取nodejs资讯
export const getTopics = params => { return axios.get(base + '/topics', { params: params }).then(res => res.data).catch(error => { console.log(error) }) }
// 获取用户信息
export const getUser = params => { return axios.get('/getUser', {params: params}).then(res => res.data).catch((error) => { console.log(error) }) }
// 获取左侧菜单列表
export const getMenus = params => { return axios.get('/getMenus').then(res => res.data).catch(error => { console.log(error) }) }
