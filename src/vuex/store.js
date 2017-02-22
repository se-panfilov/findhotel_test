import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/views/search'

Vue.use(Vuex)

const plugins = []

const store = new Vuex.Store({
  modules: {
    search
  },
  strict: false,
  plugins
})

export default store
