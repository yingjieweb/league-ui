<template>
  <div class="lol-popover" @click="xxx">
    <div class="lol-popover-content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolPopover",
    data () {
      return {
        visible: false,
      }
    },
    methods: {
      xxx() {
        this.visible = !this.visible
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lol-popover {
    display: inline-block;
    vertical-align: top;
    position: relative;

    &-content-wrapper {
      position: absolute;
      left: 0;
      bottom: 100%;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
  }
</style>