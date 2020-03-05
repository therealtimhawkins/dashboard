<template>
  <div id="app">
    <notifications />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(() => {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  }
};
</script>

<style>
#title {
  font-family: "Goudy Bookletter 1911", serif;
  font-weight: 900;
}
</style>
