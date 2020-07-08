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
  $lol-tabs-border-color: #DADADA;
  $lol-tabs-head-bg-color: #F5F5F5;

  .lol-tabs-head {
    height: $lol-tabs-head-height;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid $lol-tabs-border-color;
    background-color: $lol-tabs-head-bg-color;

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