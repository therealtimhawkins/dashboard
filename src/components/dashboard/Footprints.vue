<template>
  <div>
    <div class="section has-background-white-bis">
      <div class="is-size-3">Footprints</div>
      <div class="section">
        <div class="columns">
          <div class="column">
            <div class="box">
              <div class="subtitle has-text-weight-light is-size-5">
                You have requested
                <span class="has-text-primary has-text-weight-medium">24</span>
                footprints this week
              </div>
              <div class="columns">
                <div class="column is-narrow"></div>
                <div class="column"></div>
                <div class="column is-narrow">
                  <div class="has-text-weight-bold is-size-3 has-text-primary">
                    <span class="icon is-large is-size-3">
                      <i class="fa fa-shoe-prints"></i> </span
                    >24
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <div class="subtitle has-text-weight-light is-size-5">
                Well done! Your total footprint has been reduced
              </div>
              <div class="columns">
                <div class="column"></div>
                <div class="column is-narrow">
                  <div class="has-text-weight-bold is-size-3 has-text-primary">
                    <span class="icon is-large is-size-3">
                      <i class="fa fa-arrow-down"></i> </span
                    >-1.7%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <div class="subtitle has-text-weight-light is-size-5">
                You have offset
                <span class="has-text-primary has-text-weight-medium">17</span>
                of your total footprints
              </div>
              <div class="columns">
                <div class="column"></div>
                <div class="column is-narrow">
                  <div class="has-text-weight-bold is-size-3 has-text-primary">
                    <span class="icon is-medium is-size-3">
                      <i class="fa fa-tree"></i>
                    </span>
                    {{ offsetPercentage }}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Timestamp</th>
            <th>Emissions</th>
            <th>Breakdown</th>
            <th>Items</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="footprint in history" v-bind:key="footprint.timestamp">
            <th>
              <input type="checkbox" />
            </th>
            <th>{{ footprint.timestamp }}</th>
            <td>{{ footprint.time }}</td>
            <td>{{ footprint.time }}</td>
            <td>{{ footprint.footprint.length }}</td>
            <td>{{ footprint.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footprints",
  computed: {
    history() {
      console.log(this.$store.getters["footprint/history"][0])
      return this.$store.getters["footprint/history"]
    },
    offsetPercentage() {
      return Math.round((17 / 24) * 100)
    }
  },
  data: function() {
    return {}
  }
}
</script>

<style scoped>
.box {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
</style>
