<template>
  <div class="lol-col" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  let responsiveValidator = (layout) => {
    let keys = Object.keys(layout)
    let valid = true
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: "LolCol",
    props: {
      span: { type: [Number, String] },
      offset: { type: [Number, String] },
      iPad: { type: Object, validator: responsiveValidator },
      narrowPc: { type: Object, validator: responsiveValidator },
      pc: { type: Object, validator: responsiveValidator },
      widePc: { type: Object, validator: responsiveValidator }
    },
    data() {
      return { gutter: 0 }
    },
    computed: {
      classes() {
        const devices = ['iPad', 'narrowPc', 'pc', 'widePc']
        const classes = [
          this.span && `lol-col-span-${this.span}`,
          this.offset && `lol-col-offset-${this.offset}`
        ]
        devices.forEach((device) => {
          if (this[device]) {
            if (typeof this[device].span === 'number') {
              classes.push(`lol-col-${device}-span-${this[device].span}`)
            }
            if (typeof this[device].offset === 'number') {
              classes.push(`lol-col-${device}-offset-${this[device].offset}`)
            }
          }
        })
        return classes
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
    $phone-span-prefix: lol-col-span-;
    @for $n from 0 through 24 {
      &.#{$phone-span-prefix}#{$n} {
        width: calc($n / 24)*100%;
      }
    }

    $phone-offset-prefix: lol-col-offset-;
    @for $n from 0 through 24 {
      &.#{$phone-offset-prefix}#{$n} {
        margin-left: calc($n / 24)*100%;
      }
    }

    @media (min-width: 577px) {  /*iPad*/
      $iPad-span-prefix: lol-col-iPad-span-;
      @for $n from 0 through 24 {
        &.#{$iPad-span-prefix}#{$n} {
          width: calc($n / 24)*100%;
        }
      }

      $iPad-offset-prefix: lol-col-iPad-offset-;
      @for $n from 0 through 24 {
        &.#{$iPad-offset-prefix}#{$n} {
          margin-left: calc($n / 24)*100%;
        }
      }
    }

    @media (min-width: 769px) {  /*narrowPc*/
      $narrowPc-span-prefix: lol-col-narrowPc-span-;
      @for $n from 0 through 24 {
        &.#{$narrowPc-span-prefix}#{$n} {
          width: calc($n / 24)*100%;
        }
      }

      $narrowPc-offset-prefix: lol-col-narrowPc-offset-;
      @for $n from 0 through 24 {
        &.#{$narrowPc-offset-prefix}#{$n} {
          margin-left: calc($n / 24)*100%;
        }
      }
    }

    @media (min-width: 993px) {  /*pc*/
      $pc-span-prefix: lol-col-pc-span-;
      @for $n from 0 through 24 {
        &.#{$pc-span-prefix}#{$n} {
          width: calc($n / 24)*100%;
        }
      }

      $pc-offset-prefix: lol-col-pc-offset-;
      @for $n from 0 through 24 {
        &.#{$pc-offset-prefix}#{$n} {
          margin-left: calc($n / 24)*100%;
        }
      }
    }

    @media (min-width: 1200px) {  /*widePc*/
      $widePc-span-prefix: lol-col-widePc-span-;
      @for $n from 0 through 24 {
        &.#{$widePc-span-prefix}#{$n} {
          width: calc($n / 24)*100%;
        }
      }

      $widePc-offset-prefix: lol-col-widePc-offset-;
      @for $n from 0 through 24 {
        &.#{$widePc-offset-prefix}#{$n} {
          margin-left: calc($n / 24)*100%;
        }
      }
    }
  }
</style>