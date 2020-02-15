<template>
  <div class="column is-12">
    <div class="box">
      <div class="columns is-vcentered">
        <div class="column is-narrow">{{ date }}</div>
        <div class="column is-narrow">
          <div
            class="tag is-link is-light is-medium has-text-weight-bold is-uppercase"
          >
            {{ footprint.name }}
          </div>
        </div>
        <div class="column">{{ itemQuantity }} items</div>
        <div class="column is-narrow">
          <div class="field has-addons">
            <button class="button is-link is-light">
              <p class="control">
                <i class="fa fa-pound-sign"></i><span class="">4.90</span>
              </p>
            </button>
            <p class="control">
              <button class="button is-link is-light">
                <i class="fa fa-tree"></i><span class="">1.7</span>
              </button>
            </p>
            <p class="control">
              <button class="button is-link is-light">
                <i class="fa fa-gas-pump"></i><span class="">84</span>
              </button>
            </p>
          </div>
        </div>
        <div class="column is-narrow">
          <div class="field has-addons">
            <p class="control">
              <button class="button is-link is-light">
                <a
                  href="mailto:${contact.email}?subject=Your Carbon Footprint&body=${email}"
                  class="icon"
                  data-show-count="false"
                  target="_blank"
                >
                  <i class="fas fa-2x fa-envelope-square"></i>
                </a>
              </button>
            </p>
            <p class="control">
              <button class="button is-link is-light">
                <a
                  href="https://twitter.com/intent/tweet?button_hashtag=ClimateCrisis&ref_src=twsrc%5Etfw&text=${tweet}"
                  class="icon"
                  data-show-count="false"
                  target="_blank"
                >
                  <i class="fab fa-2x fa-twitter-square"></i>
                </a>
              </button>
            </p>
            <p class="control">
              <button class="button is-link is-light">
                <a
                  class="icon"
                  href="https://www.facebook.com/sharer/sharer.php?u=example.org"
                  target="_blank"
                >
                  <i class="fab fa-2x fa-facebook-square"></i>
                </a>
              </button>
            </p>
          </div>
        </div>
        <div class="column is-narrow">
          <button class="button is-link is-light">
            <span class="icon is-small">
              <i class="fas fa-chart-pie"></i>
            </span>
            <span>Graph view</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  name: "FootprintCard",
  props: {
    footprint: {
      type: Object,
      required: true
    }
  },
  computed: {
    date() {
      return moment(this.footprint.time).format("DD/MM/YYYY")
    },
    itemQuantity() {
      const result = this.footprint.items.reduce((acc, currentItem) => {
        console.log("acc: ", acc)
        console.log(currentItem.quantity)
        return acc + currentItem.quantity
      }, 0)
      console.log(result)
      return result
    }
  }
}
</script>
