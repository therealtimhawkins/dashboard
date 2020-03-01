<template>
  <div>
    <div class="section has-background-white-bis">
      <div class="is-size-3 has-text-weight-light">Home</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    history() {
      return this.$store.getters["footprint/history"];
    }
  }
};
</script>
