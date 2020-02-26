<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-vcentered">
            <div class="is-hidden-mobile">
              <h1 class="title is-2 is-bold" id="logo">Bigfoot.</h1>
            </div>
            <h2 class="subtitle is-5">
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
            <form>
              <div class="field">
                <label class="label has-text-weight-normal">Email</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="email"
                    placeholder="bigfoot@gmail.com"
                    v-model="email"
                    required
                  />
                  <span class="icon is-small is-left has-text-gray">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label has-text-weight-normal">Password</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="********"
                    v-model="password"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div>
                <p>
                  <a
                    href="https://bigfoot.world/#quote-section"
                    class="button is-white has-text-weight-semibold"
                    >I'd like to create an account</a
                  >
                </p>
                <p>
                  <a class="button is-white has-text-weight-semibold"
                    >I've forgotten my password</a
                  >
                </p>
              </div>
              <div class="field">
                <div
                  class="field is-grouped is-grouped-right"
                  v-if="!loggingIn"
                >
                  <button @click="login" class="button is-link is-medium">
                    <span class="icon is-small is-left">
                      <i class="fa fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
                <div class="field is-grouped is-grouped-right" v-if="loggingIn">
                  <button
                    @click="login"
                    class="button is-link is-medium is-outlined is-loading"
                  >
                    <span class="icon is-small is-left">
                      <i class="fa fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: "",
      loggingIn: false
    }
  },
  methods: {
    login: async function() {
      console.log(this.email)
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
