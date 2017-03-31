import * as types from '../types'
// 模块状态
const state = {
  login: false
}

// 异步操作
const actions = {
  setLogin: context => context.commit('SET_LOGIN'),
  logout: context => context.commit('LOGOUT')
}

// 获取操作
const getters = {
  getUser: state => state.login
}
  // 改变state
const mutations = {
  [types.SET_LOGIN] (state, res) {
    state.login = true
  },
  [types.LOGOUT] (state, res) {
    state.login = false
  }
}
  // 往外暴露
export default {
  state,
  getters,
  actions,
  mutations
}
