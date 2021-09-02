<template>
  <div class="lol-carousel-item" v-if="visible">
    <slot></slot>
  </div>
</template>

<script lang="js">
  export default {
    name: "LolCarouselItem",
    data() {
      return {
        visible: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
