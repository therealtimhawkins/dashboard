<template>
  <nav class="navbar" :class="colours.navbar" role="navigation" aria-label="main navigation">
    <a @click="logoClicked" id="logo-container">
      <div class="title is-3 is-centered" :class="colours.logo">
        <span id="logo">Bigfoot.</span>
        <span class="is-hidden-mobile has-text-weight-light is-size-4">dashboard</span>
      </div>
    </a>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    colours: {
      type: Object,
      require: true
    }
  },
  methods: {
    logoClicked() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
#logo {
  font-family: "Playfair Display", serif, italic;
  font-weight: 900;
  padding-right: 10px;
}

#logo-container {
  padding: 8px 0 0 12px;
}
</style>
