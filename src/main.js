import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import VueClipboard from "vue-clipboard2"
import Notifications from "vue-notification"

import "./assets/scss/main.scss"

Vue.use(VueClipboard)
Vue.use(Notifications)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
