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
      },
      offset: {
        type: [Number, String]
      }
    },
    data() {
      return { gutter: 0 }
    },
    computed: {
      classes() {
        return [
          'lol-col',
          this.span && `lol-col-${this.span}`,
          this.offset && `offset-${this.offset}`
        ]
      },
      styles() {
        return {
          paddingLeft: `${this.gutter / 2}px`,
          paddingRight: `${this.gutter / 2}px`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lol-col {
    $span-class-prefix: lol-col-;
    @for $n from 1 through 24 {
      &.#{$span-class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }

    $offset-class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$offset-class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
</style>