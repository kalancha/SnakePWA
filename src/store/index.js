import Vue from 'vue'
import Vuex from 'vuex'
import color from './modules/color'
import information from './modules/information'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    color,
    information
  }
})
