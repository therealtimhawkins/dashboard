<template>
  <div>
    <!-- <Login /> -->
    <Main />
  </div>
</template>

<script>
import Main from "./Main";
import footprints from "../mocks/footprints.json";

export default {
  name: "Dashboard",
  components: {
    Main
  },
  data: function() {
    return {
      footprints
    };
  }
};
</script>
