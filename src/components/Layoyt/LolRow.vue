<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolRow",
    computed: {
      classes() {
        return [
            'lol-row',
        ]
      },
      styles() {
        return {

        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lol-row {
    display: flex;
    flex-wrap: nowrap;
  }
</style>