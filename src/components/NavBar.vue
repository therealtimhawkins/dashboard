<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="title is-4 is-centered has-text-white" id="logo">
        GreenPay.
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:900:italic&display=swap");

#logo {
  font-family: "Playfair Display", serif, italic;
  font-weight: 900;
  padding: 10px 0 0 12px;
}
</style>
