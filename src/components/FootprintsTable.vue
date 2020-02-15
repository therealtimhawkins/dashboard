<template>
  <div class="section">
    <div class="container">
      <div class="columns is-multiline"></div>
      <div class="column is-12">
        <div class="columns is-size-5">
          <div class="column is-narrow has-text-weight-bold has-text-primary">
            <i class="fas fa-shoe-prints"></i>
            {{ footprints.length }} footprints in saved
          </div>
          <div class="column"></div>
          <!-- <div class="column is-narrow has-text-link">
            Average listing price of listings
          </div> -->
        </div>
      </div>
      <div
        class="column is-12"
        v-for="footprint in footprints"
        v-bind:key="footprint.time"
      >
        <FootprintCard :footprint="footprint" />
      </div>
    </div>
  </div>
</template>

<script>
import FootprintCard from "./FootprintCard"

export default {
  name: "FootprintsTable",
  components: {
    FootprintCard
  },
  props: {
    footprints: {
      type: Array,
      required: true
    }
  }
}
</script>
