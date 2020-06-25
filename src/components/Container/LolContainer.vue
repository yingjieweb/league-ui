<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolContainer",
    data() {
      return {
        hasSider: false
      }
    },
    computed: {
      classes() {
        return [
          'lol-container',
          { 'lol-container-has-sider': this.hasSider }
        ]
      }
    },
    mounted() {
      this.$children.forEach((child) => {
        if (child.$options.name === 'LolSider') {
          this.hasSider = true
        }
      })
    },
  }
</script>

<style lang="scss" scoped>
  .lol-container {
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    &-has-sider {
      flex-direction: row;
    }
  }
</style>
