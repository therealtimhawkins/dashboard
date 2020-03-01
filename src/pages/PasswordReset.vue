<template>
  <section class="hero is-fullheight">
    <NavBar v-bind="{ colours: { logo: 'has-text-black-bis' } }" />
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column hero-caption">
            <h1 class="is-size-3 has-text-weight-light" id="logo">
              Woops, I've misplaced my password...
            </h1>
            <h2 class="subtitle is-5">
              Enter your email and we'll find one for you
            </h2>
            <br />
            <div class="field">
              <label class="label has-text-weight-normal">Email</label>
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
            <p class="buttons">
              <router-link to="/apikey" class="button is-link is-solid">
                <span class="icon is-small">
                  <i class="fas fa-lock"></i>
                </span>
                <span class="has-text-weight-bold">Reset password</span>
              </router-link>
            </p>
          </div>
          <div class="column is-7">
            <figure class>
              <img
                src="@/assets/img/illustrations/password.svg"
                alt="password"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "../components/NavBar"

export default {
  name: "ResetPassword",
  data: function() {
    return {
      email: ""
    }
  },
  components: {
    NavBar
  },
  methods: {
    resetPassword: async function() {}
  }
}
</script>
