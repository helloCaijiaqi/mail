import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations/index'
import actions from './actions/index'
import getters from './getters/index'
Vue.use(Vuex)
const state = {

}
const vuex = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
export default vuex
