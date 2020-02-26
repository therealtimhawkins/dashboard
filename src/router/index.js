import Vue from "vue"
import Router from "vue-router"
import Login from "@/pages/Login"
import ApiKey from "@/pages/ApiKey"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/apikey",
      name: "ApiKey",
      component: ApiKey
    }
  ]
})
