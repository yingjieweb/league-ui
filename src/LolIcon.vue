<template>
  <svg class="lol-icon">
    <use :xlink:href="`#lol-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: "LolIcon",
    props: ['name']
  }
</script>

<style lang="scss" scoped>
  .lol-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>