<template>
  <section class="hero is-fullheight">
    <NavBar v-bind="{ colours: { logo: 'has-text-black-bis' } }" />
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-vcentered">
            <div class="is-hidden-mobile">
              <h1 class="is-size-3" id="logo">Woops, I've forgotten my password...</h1>
            </div>
            <div class="field">
              <label class="label has-text-weight-normal">Email</label>
              <div class="control has-icons-left">
                <input class="input" type="email" placeholder="bigfoot@gmail.com" v-model="email" />
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
          <div class="column"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  name: "ResetPassword",
  data: function() {
    return {
      email: ""
    };
  },
  components: {
    NavBar
  },
  methods: {
    resetPassword: async function() {}
  }
};
</script>
