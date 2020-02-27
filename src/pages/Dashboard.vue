<template>
  <div class="main-content columns is-fullheight" id="dashboardPage">
    <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <div class="field has-text-centered is-size-3">
        <span class id="logo">Bigfoot.</span>
      </div>
      <br />
      <p class="menu-label is-hidden-touch">Navigation</p>
      <ul class="menu-list">
        <li>
          <a href="#">
            <span class="icon">
              <i class="fa fa-home"></i>
            </span> Home
          </a>
        </li>
        <li>
          <a href="#" class="is-active">
            <span class="icon">
              <i class="fa fa-shoe-prints"></i>
            </span> Footprints
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <i class="fa fa-database"></i>
            </span> Logs
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <i class="fa fa-tree"></i>
            </span> Offsets
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <i class="fa fa-chart-area"></i>
            </span> Analytics
          </a>
        </li>
      </ul>
      <p class="menu-label is-hidden-touch">USER</p>
      <ul class="menu-list">
        <li>
          <a href="#">
            <span class="icon">
              <i class="fa fa-user"></i>
            </span> Profile
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <i class="fa fa-file-invoice"></i>
            </span> Account
          </a>
        </li>
      </ul>
      <p class="menu-label is-hidden-touch">HELP</p>
      <ul class="menu-list">
        <li>
          <a href="#">
            <span class="icon">
              <i class="fa fa-chalkboard-teacher"></i>
            </span> Tutorials
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <i class="fa fa-file-alt"></i>
            </span> Documentation
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <i class="fa fa-phone"></i>
            </span> Contact
          </a>
        </li>
      </ul>
      <br />
      <button class="button is-outlined">
        <span class="icon is-small is-left">
          <i class="fa fa-flip-horizontal fa-sign-out-alt"></i>
        </span>
      </button>
    </aside>
    <div class="column">
      <div class="section has-background-white-bis">
        <div class="is-size-3">Home</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {}
};
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
