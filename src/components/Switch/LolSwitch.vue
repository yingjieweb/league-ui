<template>
  <div :class="classes" @click="toggleStatus" ref="outer">
    <span class="mask" v-show="disabled"></span>
    <span class="inner"></span>
  </div>
</template>

<script lang="js">
  export default {
    name: "LolSwitch",
    props: {
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
      },
    },
    computed: {
      classes() {
        return [
          'lol-switch',
          {checked: this.value},
          {disabled: this.disabled}
        ]
      },
    },
    watch: {
      value() {
        this.setBackgroundColor()
      }
    },
    methods: {
      toggleStatus() {
        if (this.disabled) return
        this.$emit("input", !this.value);
        this.$emit("change", !this.value);
      },
      setBackgroundColor() {
        let newColor = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.outer.style.backgroundColor = newColor;
      }
    },
    mounted() {
      this.setBackgroundColor()
    }
  }
</script>

<style lang="scss" scoped>
  $height: 22px;
  $height2: $height - 4px;

  .lol-switch {
    height: $height;
    width: $height * 2;
    border: none;
    background: #bfbfbf;
    border-radius: $height / 2;
    position: relative;
    cursor: pointer;

    > .mask {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: $height2 / 2;
      background-color: ghostwhite;
      opacity: .6;
      z-index: 2;
    }

    > .inner {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $height2;
      width: $height2;
      background: white;
      border-radius: $height2 / 2;
      transition: all 250ms;
    }

    &.checked {
      > .inner {
        left: calc(100% - #{$height2} - 2px);
      }
    }

    &:active {
      > .inner {
        width: $height2 + 4px;
      }
    }

    &.checked:active {
      > .inner {
        width: $height2 + 4px;
        margin-left: -4px;
      }
    }

    &.disabled {
      cursor: not-allowed;
    }
  }
</style>
