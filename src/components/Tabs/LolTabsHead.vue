<template>
  <div class="lol-tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LolTabsHead",
    inject: ['eventBus'],
    created() {
      console.log('爷爷给爸爸的eventbus')
      console.log(this.eventBus)
    }
  }
</script>

<style lang="scss" scoped>
  $lol-tab-height: 40px;
  $blue: blue;
  $border-color: #ddd;
  .lol-tabs-head {
    display: flex;
    height: $lol-tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all 350ms;
    }
    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>