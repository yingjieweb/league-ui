<template>
  <div class="lol-tabs-head">
    <slot></slot>

    <div class="lol-tabs-head-actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LolTabsHead"
  }
</script>

<style lang="scss" scoped>
  $lol-tabs-head-height: 40px;

  .lol-tabs-head {
    height: $lol-tabs-head-height;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid red;

    &-actions-wrapper {
      margin-left: auto;
      height: 100%;
    }
    // LolButton
    button {
      height: 100%;
      border-radius: 0;
    }
  }
</style>