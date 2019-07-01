import Vue from 'vue'
import Vuex from 'vuex'


//引入模块
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)



//暴露store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
