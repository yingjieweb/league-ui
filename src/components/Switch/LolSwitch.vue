<template>
  <button @click="toggleStatus" :class="{checked: value}">
    <span></span>
  </button>
</template>

<script lang="js">
  export default {
    name: "LolSwitch",
    props: {
      value: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      toggleStatus() {
        this.$emit("input", !this.value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  $height: 22px;
  $height2: $height - 4px;

  button {
    height: $height;
    width: $height * 2;
    border: none;
    background: #bfbfbf;
    border-radius: $height/2;
    position: relative;
    cursor: pointer;

    > span {
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
      background: #1890ff;

      > span {
        left: calc(100% - #{$height2} - 2px);
      }
    }

    &:focus {
      outline: none;
    }

    &:active {
      > span {
        width: $height2 + 4px;
      }
    }

    &.checked:active {
      > span {
        width: $height2 + 4px;
        margin-left: -4px;
      }
    }
  }
</style>
