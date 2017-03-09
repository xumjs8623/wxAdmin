import Vue from 'vue'
import Vuex from 'vuex'
import addNum from './modules/addNum.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    addNum
  }
})
