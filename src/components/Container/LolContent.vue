<template>
  <div class="lol-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolContent"
  }
</script>

<style lang="scss" scoped>
  .lol-content {
    flex-grow: 1;
  }
</style>