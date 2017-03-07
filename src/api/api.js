import axios from 'axios'
let base = ' https://cnodejs.org/api/v1'
export const getMenus = params => { return axios.get(base + '/topics', { params: params }).then(res => res.data) }
