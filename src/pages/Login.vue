<template>
  <section class="hero is-fullheight">
    <NavBar v-bind="{ colours: { logo: 'has-text-black-bis' } }" />
    <div class="hero-body" id="background-img">
      <div class="container">
        <div class="columns">
          <div class="column is-vcentered">
            <div class="is-hidden-mobile">
              <h1 class="title is-1" id="title">Analyse your carbon impact for free.</h1>
            </div>
            <h2
              class="is-size-4 has-text-weight-light"
            >Get deeper insights into your footprints with the Bigfoot dashboard.</h2>
            <br />
            <p class="buttons">
              <router-link to="/apikey" class="button is-primary has-text-white-bis">
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
                  v-on:keyup.enter="login"
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
                  v-on:keyup.enter="login"
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
                >I'd like to create an account</router-link>
              </p>
              <p>
                <router-link
                  to="/reset"
                  class="button is-white has-text-weight-normal"
                >I've forgotten my password</router-link>
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
import NavBar from "../components/NavBar";

export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    NavBar
  },
  methods: {
    login: async function() {
      let email = this.email;
      let password = this.password;
      this.$store.dispatch("auth/login", { email, password }).then(() => {
        this.$router.push("/dashboard");
      });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:900:italic&display=swap");

#logo {
  font-family: "Playfair Display", serif, italic;
  font-weight: 900;
  padding-right: 10px;
}

/* #background-img {
  background-image: url(../assets/img/illustrations/login.svg);
  background-size: 50%;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
} */

.box {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background-color: rgba(255, 255, 255, 0.95);
}
</style>
