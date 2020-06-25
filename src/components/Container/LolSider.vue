<template>
  <div v-show="visible" class="lol-sider">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolSider",
    props: {
      visible: {
        type: Boolean,
        default: true
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
