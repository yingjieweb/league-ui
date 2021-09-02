<template>
  <div class="lol-carousel">
    <div class="lol-carousel-window">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="js">
  import LolCarouselItem from "./LolCarouselItem"

  export default {
    name: "LolCarousel",
    components: {
      LolCarouselItem
    }
  }
</script>

<style lang="scss" scoped>
  .lol-carousel {
    width: 100%;
    display: flex;
  }
</style>
