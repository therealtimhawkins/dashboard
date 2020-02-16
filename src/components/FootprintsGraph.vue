<template>
  <div id="chart">
    <apexchart type="area" height="200" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "NavBar",
  components: {
    apexchart: VueApexCharts
  },
  props: {
    footprints: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      series: [
        {
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chartOptions: {
        chart: {
          height: 200,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z"
          ]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      }
    };
  }
};
</script>
