import Vue from "vue"
import Vuex from "vuex"
import auth from "./auth.store"

Vue.use(Vuex)

const store = new Vuex.Store({
  debug: false,
  modules: {
    auth
  }
})

export default store