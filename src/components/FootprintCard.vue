<template>
  <div class="box">
    <div class="columns is-vcentered">
      <div class="column is-narrow has-text-centered">{{ date }}</div>
      <div class="column is-narrow has-text-centered">
        <div
          class="tag is-link is-light is-medium has-text-weight-bold is-uppercase"
        >{{ footprint.name }}</div>
      </div>
      <div class="column has-text-centered">{{ itemQuantity }} items</div>
      <div class="column is-narrow has-text-centered">
        <div class="field has-addons">
          <p class="control">
            <button class="button is-link is-light">
              <span class="icon is-small">
                <i class="fas fa-pound-sign"></i>
              </span>
              <span>4.90</span>
            </button>
          </p>
          <p class="control">
            <button class="button is-link is-light">
              <span class="icon is-small">
                <i class="fas fa-tree"></i>
              </span>
              <span>1.7</span>
            </button>
          </p>
          <p class="control">
            <button class="button is-link is-light">
              <span class="icon is-small">
                <i class="fas fa-gas-pump"></i>
              </span>
              <span>84</span>
            </button>
          </p>
        </div>
      </div>
      <div class="column is-narrow has-text-centered">
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
      <div class="column is-narrow has-text-centered">
        <button class="button is-link is-light">
          <span class="icon is-small">
            <i class="fas fa-chart-pie"></i>
          </span>
          <span>Graph view</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

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
      return moment(this.footprint.time).format("DD/MM/YYYY");
    },
    itemQuantity() {
      const result = this.footprint.items.reduce((acc, currentItem) => {
        console.log("acc: ", acc);
        console.log(currentItem.quantity);
        return acc + currentItem.quantity;
      }, 0);
      console.log(result);
      return result;
    }
  }
};
</script>
