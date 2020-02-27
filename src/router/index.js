import Vue from "vue"
import Router from "vue-router"
import Login from "@/pages/Login"
import ApiKey from "@/pages/ApiKey"
import Dashboard from "@/pages/Dashboard"

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
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    }
  ]
})
