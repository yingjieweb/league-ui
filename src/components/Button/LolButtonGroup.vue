<template>
  <div class="lol-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolButtonGroup",
    mounted() {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase();
        if (name !== 'button') {
          console.warn(`lol-button-group component should have lol-button child, but detect <${name}>`);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lol-button-group {
    display: inline-flex;
    vertical-align: middle;

    > .lol-button {
      border-radius: 0;

      &:not(:first-child) {
        margin-left: 1px;
      }

      &:first-child {
        margin-left: 0;
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }

      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }

      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>