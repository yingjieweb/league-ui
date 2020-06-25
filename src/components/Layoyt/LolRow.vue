<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolRow",
    props: {
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator(alignment) {
          return ['left', 'right', 'center'].indexOf(alignment) > -1
        }
      }
    },
    mounted() {
      // Pass gutter to LolCol components
      this.$children.forEach((child) => {
        child.gutter = this.gutter
      })
    },
    computed: {
      classes() {
        return [
            'lol-row',
            this.align && `lol-row-align-${this.align}`
        ]
      },
      styles() {
        return {
          marginLeft: `${-this.gutter / 2}px`,
          marginRight: `${-this.gutter / 2}px`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lol-row {
    display: flex;
    flex-wrap: wrap;

    &-align-left {
      justify-content: flex-start;
    }
    &-align-right {
      justify-content: flex-end;
    }
    &-align-center {
      justify-content: center;
    }
  }
</style>