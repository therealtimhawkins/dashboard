<template>
  <div>
    <div class="section">
      <div class="columns">
        <div class="column">
          <button @click="logout" class="button is-link is-medium">
            <span class="icon is-small is-left">
              <i class="fa fa-sign-out-alt"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="section">
      <a class="box has-background-info has-text-white is-size-5 has-text-weight-bold">Dashboard</a>
      <a class="box has-background-info has-text-white is-size-5 has-text-weight-bold">Footprints</a>
      <a class="box has-background-info has-text-white is-size-5 has-text-weight-bold">Logs</a>
      <a class="box has-background-info has-text-white is-size-5 has-text-weight-bold">Analytics</a>
      <a class="box has-background-info has-text-white is-size-5 has-text-weight-bold">Offsets</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  components: {},
  methods: {
    logout: async function() {}
  }
};
</script>
