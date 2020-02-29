import axios from "axios"

const store = {
  namespaced: true,
  state: {
    history: []
  },
  getters: {
    history: state => state.history
  },
  mutations: {
    setHistory(state, history) {
      state.history = history
    }
  },
  actions: {
    getHistory({ commit }) {
      return new Promise(resolve => {
        axios.get("http://localhost:3000/footprint/history").then(response => {
          const history = response.data.history
          if (history) {
            commit("setHistory", history)
          }
          resolve()
        })
      })
    }
  }
}

export default store
