<template>
  <div>
    <NavBar v-bind="{colours: {navbar: 'has-background-info', logo: 'has-text-white-bis'}}" />
    <div class="columns">
      <div class="column side-bar is-3 has-background-info">
        <SideBar />
      </div>
      <div class="column">
        <div class="section has-background-white-bis"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {
    NavBar: () => import("../components/NavBar"),
    SideBar: () => import("../components/SideBar")
  }
};
</script>

<style>
.side-bar {
  height: 100vh;
}
</style>
