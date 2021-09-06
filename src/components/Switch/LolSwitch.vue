<template>
  <div
    ref="outer"
    :class="classes"
    :style="outerStyles"
    @click="toggleStatus"
    @mousedown="setActiveStyles"
    @mouseup="setInactiveStyles">
    <span ref="inner" class="inner" :style="innerStyles"></span>
  </div>
</template>

<script lang="js">
  export default {
    name: "LolSwitch",
    props: {
      width: {
        type: Number | String,
        default: 44
      },
      height: {
        type: Number | String,
        default: 22,
      },
      value: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      activeColor: {
        type: String,
        default: '#409EFF'
      },
      inactiveColor: {
        type: String,
        default: '#E4E7ED'
      }
    },
    computed: {
      classes() {
        return [
          'lol-switch',
          {checked: this.value},
          {disabled: this.disabled}
        ]
      },
      outerStyles() {
        return {
          width: this.width + 'px',
          height: this.height + 'px',
          borderRadius: this.height / 2 + 'px'
        }
      },
      innerStyles() {
        return {
          width: this.height - 4 + 'px',
          height: this.height - 4 + 'px',
          borderRadius: this.height / 2 + 'px'
        }
      }
    },
    watch: {
      value() {
        this.setInnerStyles()
        this.setBackgroundColor()
      }
    },
    methods: {
      toggleStatus() {
        if (this.disabled) return
        this.$emit("input", !this.value);
        this.$emit("change", !this.value);
      },
      setActiveStyles() {
        if (this.value) {
          this.$refs.inner.style.width = this.height + 'px';
          this.$refs.inner.style.marginLeft = '-4px';
        } else {
          this.$refs.inner.style.width = this.height + 'px';
          this.$refs.inner.style.marginLeft = '0px';
        }
      },
      setInactiveStyles() {
        this.$refs.inner.style.width = this.height - 4 + 'px';
        this.$refs.inner.style.marginLeft = '0px';
      },
      setBackgroundColor() {
        let newColor = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.outer.style.backgroundColor = newColor;
      },
      setInnerStyles() {
        if (this.height > this.width/2) {
          throw "The width must be greater than twice the height";
        } else {
          let newLeft = this.value ? this.width - this.height + 2 : 2;
          this.$refs.inner.style.top = '2px';
          this.$refs.inner.style.left = newLeft + 'px';
        }
      }
    },
    mounted() {
      this.setInnerStyles()
      this.setBackgroundColor()
    }
  }
</script>

<style lang="scss" scoped>
  .lol-switch {
    display: inline-block;
    background: #bfbfbf;
    position: relative;
    cursor: pointer;

    > .inner {
      position: absolute;
      background: white;
      transition: all 250ms;
    }

    &.disabled {
      opacity: .6;
      cursor: not-allowed;
    }
  }
</style>
