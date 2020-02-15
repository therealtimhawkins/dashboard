<template>
  <div class="column is-12">
    <div class="box">{{footprint.name}}</div>
  </div>
</template>

<script>
export default {
  name: "FootprintCard",
  props: {
    footprint: {
      type: Object,
      required: true
    }
  }
};
</script>
