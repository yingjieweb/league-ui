<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolCol",
    props: {
      span: {
        type: [Number, String]
      }
    },
    computed: {
      classes() {
        return [
          'lol-col',
          `lol-col-${this.span}`
        ]
      },
      styles() {
        return {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lol-col {
    height: 100px;
    width: 50%;
    border: 1px solid green;
    background-color: #99A9BF;
    border-radius: 12px;

    $class-prefix: lol-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
  }
</style>