<template>
  <section class="hero is-fullheight">
    <NavBar v-bind="{ colours: { logo: 'has-text-black-bis' } }" />
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div v-if="!apikey" class="column is-6">
            <div class="field">
              <h1 class="title is-size-2" id="title">Get started with your Bigfoot account</h1>
            </div>
            <h2 class="subtitle is-5 has-text-weight-light">
              Find your footprints. Reduce your impact. Already have an account?
              <router-link to="/" class="has-text-weight-normal has-text-primary">Log in</router-link>
            </h2>
            <div>
              <div class="field">
                <label class="label has-text-weight-normal is-size-7 has-text-black-bis">Name</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    :class="nameClass"
                    v-on:keyup.enter="login"
                    placeholder="Bigfoot"
                    v-model="name"
                    required
                  />
                  <span class="icon is-small is-left has-text-gray">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label has-text-weight-normal is-size-7 has-text-black-bis">Email</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    :class="emailClass"
                    v-on:keyup.enter="login"
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
                <label class="label has-text-weight-normal is-size-7 has-text-black-bis">Password</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    :class="passwordClass"
                    v-on:keyup.enter="login"
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
              <div class="field">
                <label
                  class="label has-text-weight-normal is-size-7 has-text-black-bis"
                >Confirm password</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    :class="passwordClass"
                    v-on:keyup.enter="login"
                    type="password"
                    placeholder="********"
                    v-model="confirmPassword"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="columns">
                <div class="column is-narrow">
                  <span class="icon">
                    <i class="fas" :class="nameReady"></i>
                  </span>
                  <span class="has-text-weight-light">Name</span>
                </div>
                <div class="column is-narrow">
                  <span class="icon">
                    <i class="fas" :class="emailReady"></i>
                  </span>
                  <span class="has-text-weight-light">Email</span>
                </div>
                <div class="column is-narrow">
                  <span class="icon">
                    <i class="fas" :class="passwordReady"></i>
                  </span>
                  <span class="has-text-weight-light">Password</span>
                </div>
              </div>
              <div class="field">
                <div class="field is-grouped is-grouped-right">
                  <button @click="register" class="button is-link" :disabled="buttonReady">
                    <span class="icon is-small">
                      <i class="fas fa-key"></i>
                    </span>
                    <span class="has-text-weight-bold">Get my key</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="apikey">
            <div class="section">
              <div class="title is-3">Here's your API key {{ this.name }}...</div>
              <div
                class="subtitle has-text-weight-light"
              >Keep it somewhere safe, you won't be able to see this again.</div>
              <div class="column is-5">
                <div class="columns">
                  <div class="column">
                    <div class="tag is-large">{{ apikey }}</div>
                  </div>
                  <div class="column is-narrow">
                    <div
                      class="button is-primary has-text-white has-text-weight-bold"
                      v-clipboard:copy="apikey"
                      v-clipboard:success="onCopy"
                    >Copy!</div>
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
import NavBar from "../components/NavBar";
import { emailValidation } from "./helpers";

export default {
  name: "ApiKey",
  data: function() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      apikey: "",
      submitButton: false
    };
  },
  components: {
    NavBar
  },
  computed: {
    nameClass() {
      return {
        "is-primary": this.name
      };
    },
    nameReady() {
      return {
        "fa-check has-text-primary": this.name,
        "fa-times has-text-danger": !this.name
      };
    },
    emailClass() {
      return {
        "is-primary": emailValidation(this.email),
        "is-danger": !emailValidation(this.email) && this.email.length > 0
      };
    },
    emailReady() {
      return {
        "fa-check has-text-primary": emailValidation(this.email),
        "fa-times has-text-danger": !emailValidation(this.email)
      };
    },
    passwordClass() {
      return {
        "is-danger": this.password != this.confirmPassword,
        "is-primary":
          this.password === this.confirmPassword && this.password.length > 7
      };
    },
    passwordReady() {
      return {
        "fa-check has-text-primary":
          this.password === this.confirmPassword && this.password.length > 7,
        "fa-times has-text-danger":
          this.password != this.confirmPassword || this.password.length === 0
      };
    },
    buttonReady() {
      if (this.passwordReady === "fa-check has-text-primary") {
        return true;
      }
      return false;
    }
  },
  methods: {
    async register() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      if (this.name && this.email && this.password && this.confirmPassword)
        try {
          const result = await this.$store.dispatch("auth/register", data);
          this.apikey = result.apikey;
        } catch (error) {
          this.$notify("Could not create API key");
        }
    },
    onCopy() {
      this.$notify("API key copied!");
    }
  }
};
</script>
