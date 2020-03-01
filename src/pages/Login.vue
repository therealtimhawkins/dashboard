<template>
  <section class="hero is-fullheight">
    <NavBar v-bind="{ colours: { logo: 'has-text-black-bis' } }" />
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-vcentered">
            <div class="is-hidden-mobile">
              <h1 class="title is-2 is-bold" id="logo">Bigfoot.</h1>
            </div>
            <h2 class="subtitle is-5 has-text-weight-light">
              Calculate and offset your carbon footprint on the fly.
            </h2>
            <p class="buttons">
              <router-link to="/apikey" class="button is-solid">
                <span class="icon is-small">
                  <i class="fas fa-key"></i>
                </span>
                <span class="has-text-weight-bold">Get an API key</span>
              </router-link>
            </p>
          </div>
          <div class="column is-5">
            <div class="field">
              <label class="label has-text-weight-light">Email</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="email"
                  placeholder="bigfoot@gmail.com"
                  v-model="email"
                />
                <span class="icon is-small is-left has-text-gray">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-weight-light">Password</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  placeholder="********"
                  v-model="password"
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div>
              <p>
                <router-link
                  to="/apikey"
                  class="button is-white has-text-weight-normal"
                  >I'd like to create an account</router-link
                >
              </p>
              <p>
                <router-link
                  to="/reset"
                  class="button is-white has-text-weight-normal"
                  >I've forgotten my password</router-link
                >
              </p>
            </div>
            <div class="field">
              <div class="field is-grouped is-grouped-right">
                <button @click="login" class="button is-link is-medium">
                  <span class="icon is-small is-left">
                    <i class="fa fa-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "../components/NavBar"

export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: ""
    }
  },
  components: {
    NavBar
  },
  methods: {
    login: async function() {
      let email = this.email
      let password = this.password
      this.$store.dispatch("auth/login", { email, password }).then(() => {
        this.$router.push("/dashboard")
      })
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:900:italic&display=swap");

#logo {
  font-family: "Playfair Display", serif, italic;
  font-weight: 900;
  padding-right: 10px;
}
</style>
