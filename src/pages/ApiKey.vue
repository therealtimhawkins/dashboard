<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div v-if="!apikey" class="column is-5">
            <form>
              <div class="field">
                <label class="label has-text-weight-normal has-text-black-bis">Name</label>
                <div class="control has-icons-left">
                  <input class="input" placeholder="Tim Hawkins" v-model="name" required />
                  <span class="icon is-small is-left has-text-gray">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label has-text-weight-normal has-text-black-bis">Email</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="email"
                    placeholder="my@bigfoot.world"
                    v-model="email"
                    required
                  />
                  <span class="icon is-small is-left has-text-gray">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label has-text-weight-normal has-text-black-bis">Password</label>
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
                  <router-link
                    to="/"
                    class="button is-white has-text-weight-semibold"
                  >I already have a key</router-link>
                </p>
              </div>
              <div class="field">
                <div class="field is-grouped is-grouped-right">
                  <button @click="register" class="button is-link">
                    <span class="icon is-small">
                      <i class="fas fa-key"></i>
                    </span>
                    <span class="has-text-weight-bold">Get my key</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div v-if="apikey">
            <div class="section">
              <div class="title is-4">Here's your API key...</div>
              <div class="subtitle">Keep it somewhere safe, you won't be able to see this again.</div>
              <div class="column is-5">
                <div class="columns">
                  <div class="column">
                    <div class="tag is-large">{{apikey}}</div>
                  </div>
                  <div class="column is-2">
                    <div class="button is-primary has-text-white has-text-weight-bold">Copy</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section">
              <div class="title is-4">Where next?</div>
              <div class="buttons has-text-centered">
                <a class="button" href="https://docs.bigfoot.world">Documenation</a>
                <router-link to="/dashboard" class="button">Dashboard</router-link>
                <a class="button" href="https://docs.bigfoot.world/tutorials">Tutorials</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ApiKey",
  data: function() {
    return {
      email: "",
      password: "",
      name: "",
      apikey: "gh4G72ZPCOpQ5kcSPJRV6uHd9RIh1pZd"
    };
  },
  methods: {
    register: async function() {
      if (this.email && this.password && this.name) {
        const result = await axios.post(
          process.env.VUE_APP_FOOTPRINTER + "/auth/register",
          { email: this.email, password: this.password, name: this.name }
        );
        this.apikey = result.data.apikey;
      }
    }
  }
};
</script>
