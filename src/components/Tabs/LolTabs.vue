<template>
  <div class="lol-tabs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolTabs",
    props: {
      selected: {
        type: String,
        required : true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>