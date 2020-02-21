<template>
  <div>
    <NavBar />
    <Login />
  </div>
</template>

<script>
import NavBar from "./NavBar";
import Login from "./Login";
import footprints from "../mocks/footprints.json";

export default {
  name: "Dashboard",
  components: {
    NavBar,
    Login
  },
  data: function() {
    return {
      footprints
    };
  }
};
</script>
