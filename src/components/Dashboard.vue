<template>
  <div>
    <NavBar />
    <FootprintsTable :footprints="footprints" />
  </div>
</template>

<script>
import NavBar from "./NavBar";
import FootprintsTable from "./FootprintsTable";
import footprints from "../mocks/footprints.json";

export default {
  name: "Dashboard",
  components: {
    NavBar,
    FootprintsTable
  },
  data: function() {
    return {
      footprints
    };
  }
};
</script>
