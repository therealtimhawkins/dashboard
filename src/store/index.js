import Vue from "vue"
import Vuex from "vuex"
import auth from "./auth.store"
import footprint from "./footprint.store"

Vue.use(Vuex)

const store = new Vuex.Store({
  debug: false,
  modules: {
    auth,
    footprint
  }
})

export default store
