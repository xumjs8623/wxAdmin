import Vue from 'vue'
import Vuex from 'vuex'
import addNum from './modules/addNum.js'
import user from './modules/user.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    addNum,
    user
  }
})
