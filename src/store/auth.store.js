import axios from "axios"

const store = {
  namespaced: true,
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: null
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  mutations: {
    auth_request(state) {
      state.status = "loading"
    },
    auth_success(state, token, user) {
      state.status = "success"
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = "error"
    },
    logout(state) {
      state.status = ""
      state.token = ""
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request")
        axios({
          url: "http://localhost:3000/auth/login",
          data: user,
          method: "POST"
        })
          .then(response => {
            const token = response.data.user.token
            const user = response.data.user
            localStorage.setItem("token", token)
            axios.defaults.headers.common["Authorization"] = token
            commit("auth_success", token, user)
            resolve(response)
          })
          .catch(error => {
            commit("auth_error")
            localStorage.removeItem("token")
            reject(error)
          })
      })
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request")
        axios({
          url: "http://localhost:3000/auth/register",
          data: user,
          method: "POST"
        })
          .then(response => {
            console.log(response.data)
            const token = response.data.token
            const user = response.data.userId
            localStorage.setItem("token", token)
            axios.defaults.headers.common["Authorization"] = token
            commit("auth_success", token, user)
            resolve(response.data)
          })
          .catch(error => {
            console.log(error)
            commit("auth_error", error)
            localStorage.removeItem("token")
            reject(error)
          })
      })
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("logout")
        localStorage.removeItem("token")
        delete axios.defaults.headers.common["Authorization"]
        resolve()
      })
    }
  }
}

export default store
