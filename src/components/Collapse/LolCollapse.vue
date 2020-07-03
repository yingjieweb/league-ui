<template>
  <div class="lol-collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "LolCollapse",
    props: {
      multiSelect: {
        type: Boolean,
        default: true
      },
      selected: {
        type: [Array]
      }
    },
    data() {
      return {
        eventBus: new Vue
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    }
  }
</script>

<style lang="scss" scoped>
  $grey: #ddd;
  $border-radius: 4px;

  .lol-collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>