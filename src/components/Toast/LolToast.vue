<template>
  <div class="lol-toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolToast"
  }
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  $toast-border-show: rgba(0, 0, 0, 0.50);

  .lol-toast {
    height: $toast-height;
    font-size: $font-size;
    line-height: 1.8;

    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    align-items: center;

    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px $toast-border-show;
    color: white;
    padding: 0 16px;
  }
</style>