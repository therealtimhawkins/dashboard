<template>
  <div class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div
          class="column is-12"
          v-for="(footprint, index) in history"
          v-bind:key="footprint.name + index"
        >
          <div class="box">
            <div class="columns">
              <div class="column">{{footprint.name}}</div>
              <div class="column"></div>
              <div class="column"></div>
              <div class="column"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryTable",
  components: {},
  props: {
    history: {
      type: Array,
      default: () => [
        {
          name: "selfridges",
          items: [
            {
              name: "ALLSAINTS",
              description: "Drury camouflage-effect leather jacket",
              price: "\n\t\t\t\t£190.00\n\t\t\t",
              size: "Size:  M"
            },
            {
              name: "OFF-WHITE C/O VIRGIL ABLOH",
              description: "Ocean Debris long-sleeved cotton-jersey T-shirt",
              price: "\n\t\t\t\t£245.00\n\t\t\t",
              size: "Size:  M"
            },
            {
              name: "STONE ISLAND",
              description: "Double-zipped cotton-jersey hoody",
              price: "\n\t\t\t\t£350.00\n\t\t\t",
              size: "Size:  XL"
            }
          ],
          time: 1580763289141
        },
        {
          name: "selfridges",
          items: [
            {
              name: "ALLSAINTS",
              description: "Drury camouflage-effect leather jacket",
              price: "\n\t\t\t\t£190.00\n\t\t\t",
              size: "Size:  M"
            },
            {
              name: "OFF-WHITE C/O VIRGIL ABLOH",
              description: "Ocean Debris long-sleeved cotton-jersey T-shirt",
              price: "\n\t\t\t\t£245.00\n\t\t\t",
              size: "Size:  M"
            },
            {
              name: "STONE ISLAND",
              description: "Double-zipped cotton-jersey hoody",
              price: "\n\t\t\t\t£350.00\n\t\t\t",
              size: "Size:  XL"
            }
          ],
          time: 1580763289141
        }
      ]
    }
  }
};
</script>
