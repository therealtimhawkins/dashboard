<template>
  <div class="main-content columns is-fullheight" id="dashboardPage">
    <aside
      class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile"
    >
      <div class="field has-text-centered is-size-3">
        <span class="has-text-black" id="logo">Admin.</span>
      </div>
      <div class="columns is-vcentered">
        <div class="column is-12 has-text-centered">
          <button class="button is-white">
            <span class="icon is-small is-left">
              <i class="fa fa-flip-horizontal fa-sign-out-alt"></i>
            </span>
          </button>
          <button class="button is-white">
            <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
            </span>
          </button>
          <button class="button is-white">
            <span class="icon is-small is-left">
              <i class="fa fa-key"></i>
            </span>
          </button>
          <button class="button is-white">
            <span class="icon is-small is-left">
              <i class="fa fa-download"></i>
            </span>
          </button>
        </div>
      </div>
      <br />
      <ul class="menu-list">
        <li>
          <a
            :class="{ 'is-active': dash === 'Home' }"
            @click="sidebarClicked('Home')"
          >
            <span class="icon">
              <i class="fa fa-home"></i>
            </span>
            Home
          </a>
        </li>
        <li>
          <a
            :class="{ 'is-active': dash === 'Footprints' }"
            @click="sidebarClicked('Footprints')"
          >
            <span class="icon">
              <i class="fa fa-shoe-prints"></i>
            </span>
            Footprints
          </a>
        </li>
        <li>
          <a
            :class="{ 'is-active': dash === 'Logs' }"
            @click="sidebarClicked('Logs')"
          >
            <span class="icon">
              <i class="fa fa-database"></i>
            </span>
            Logs
          </a>
        </li>
        <li>
          <a
            :class="{ 'is-active': dash === 'Offsets' }"
            @click="sidebarClicked('Offsets')"
          >
            <span class="icon">
              <i class="fa fa-tree"></i>
            </span>
            Offsets
          </a>
        </li>
        <li>
          <a
            :class="{ 'is-active': dash === 'Analytics' }"
            @click="sidebarClicked('Analytics')"
          >
            <span class="icon">
              <i class="fa fa-chart-area"></i>
            </span>
            Analytics
          </a>
        </li>
        <li>
          <a href="https://docs.bigfoot.world/tutorials">
            <span class="icon">
              <i class="fa fa-chalkboard-teacher"></i>
            </span>
            Tutorials
          </a>
        </li>
        <li>
          <a href="https://docs.bigfoot.world">
            <span class="icon">
              <i class="fa fa-file-alt"></i>
            </span>
            Documentation
          </a>
        </li>
        <li>
          <a
            :class="{ 'is-active': dash === 'Contact' }"
            @click="sidebarClicked('Contact')"
          >
            <span class="icon">
              <i class="fa fa-phone"></i>
            </span>
            Contact
          </a>
        </li>
      </ul>
    </aside>
    <div class="column"></div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
  data: function() {
    return {
      dash: "Home"
    }
  },
  methods: {
    sidebarClicked(button) {
      this.dash = button
    }
  }
}
</script>

<style>
#dashboardPage {
  height: 102vh;
}
</style>

<style scoped>
#logo {
  font-family: "Playfair Display", serif, italic;
  font-weight: 900;
  padding-right: 10px;
}
</style>
