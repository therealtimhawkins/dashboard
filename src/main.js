import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import VueClipboard from "vue-clipboard2"
import Notifications from "vue-notification"
import Axios from "axios"
import "./assets/scss/main.scss"

Vue.config.productionTip = false

Vue.prototype.$http = Axios
Vue.use(VueClipboard)
Vue.use(Notifications)

const token = localStorage.getItem("token")
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")
