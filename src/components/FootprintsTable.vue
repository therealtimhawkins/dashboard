<template>
  <div class="section">
    <div class="container">
      <div class="columns is-multiline" v-for="footprint in footprints" v-bind:key="footprint.time">
        <FootprintCard :footprint="footprint" />
      </div>
    </div>
  </div>
</template>

<script>
import FootprintCard from "./FootprintCard";

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
};
</script>
