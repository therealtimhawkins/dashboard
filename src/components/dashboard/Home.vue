<template>
  <nav class="navbar" :class="colours.navbar" role="navigation" aria-label="main navigation">
    <div id="logo-container">
      <div class="title is-3 is-centered" :class="colours.logo">
        <span id="logo">Bigfoot.</span>
        <span class="is-hidden-mobile has-text-weight-light is-size-4">dashboard</span>
      </div>
    </div>
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
  }
};
</script>
