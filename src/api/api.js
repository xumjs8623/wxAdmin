import axios from 'axios'
let base = ' https://cnodejs.org/api/v1'
export const getMenus = params => { return axios.get(base + '/topics', { params: params }).then(res => res.data).catch(error => { console.log(error) }) }
export const getUser = params => { return axios.get('/getUser', {params: params}).then(res => res.data).catch((error) => { console.log(error) }) }
