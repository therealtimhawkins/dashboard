<template>
  <div>
    <div class="section has-background-white-bis">
      <div class="container">
        <div class="title is-5 has-text-info">
          <i class="fas fa-chart-line"></i>
          Your activity
        </div>
        <hr />
        <FootprintsGraph :footprints="footprints" />
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="columns is-multiline"></div>
        <div class="column is-12">
          <div class="columns is-size-5 has-text-info">
            <div class="column is-narrow has-text-weight-bold">
              <i class="fas fa-shoe-prints"></i>
              {{ footprints.length }} footprints saved
            </div>
          </div>
        </div>
        <div class="column is-12" v-for="footprint in footprints" v-bind:key="footprint.time">
          <FootprintCard :footprint="footprint" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FootprintsGraph from "./FootprintsGraph";
import FootprintCard from "./FootprintCard";

export default {
  name: "FootprintsTable",
  components: {
    FootprintCard,
    FootprintsGraph
  },
  props: {
    footprints: {
      type: Array,
      required: true
    }
  }
};
</script>
