<template>
  <div id="app">
    <NavBar v-bind="{ colours: { logo: 'has-text-black-bis' } }" />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar"
export default {
  name: "App",
  components: {
    NavBar
  }
}
</script>
