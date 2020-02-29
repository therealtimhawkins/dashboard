import Vue from "vue"
import Router from "vue-router"
import store from "../store"
import Login from "@/pages/Login"
import ApiKey from "@/pages/ApiKey"
import Dashboard from "@/pages/Dashboard"
import Admin from "@/pages/Admin"

Vue.use(Router)

const router = new Router({
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
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(store.getters["auth/isLoggedIn"])
    if (store.getters["auth/isLoggedIn"]) {
      next()
      return
    }
    next("/")
  } else {
    next()
  }
})

export default router
