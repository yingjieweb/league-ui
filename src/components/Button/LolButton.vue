<template>
  <button :class="classes" @click="$emit('click')">
    <lol-icon
            class="lol-button-icon"
            color="#fff"
            :is-loading="isLoading"
            :name="iconName">
    </lol-icon>
    <span class="lol-button-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  import LolIcon from "../Icon/LolIcon";

  export default {
    name: "LolButton",
    components: {
      'lol-icon': LolIcon
    },
    props: {
      iconName: {
        type: String
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(iconPosition) {
          return ['left', 'right'].indexOf(iconPosition) > -1;
        }
      },
      isLoading: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'primary',
        validator(type) {
          return ['primary', 'warning', 'danger', 'info', 'success'].indexOf(type) > -1
        }
      }
    },
    computed: {
      classes() {
        return [
          'lol-button',
          { [`lol-button-icon-${this.iconPosition}`]: true, },
          `lol-button-${this.type}`
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  $global-font-size: 14px;
  $global-border-radius: 4px;
  $global-border-color: #999999;
  $global-border-color-hover: #666666;

  $lol-button-height: 32px;
  $lol-button-bgc-active: #eeeeee;
  $lol-button-text-color: #ffffff;
  $lol-button-shadow-color: rgba(255, 255, 255, 1);

  .lol-button {
    padding: 0 1em;
    height: $lol-button-height;
    font-size: $global-font-size;
    border-radius: $global-border-radius;
    color: $lol-button-text-color;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 3px 3px $lol-button-shadow-color;
    }

    &:active {
      background-color: $lol-button-bgc-active;
    }

    &:focus {
      outline: none;
    }

    > .lol-button-icon {order: 1;}
    > .lol-button-content {order: 2; margin: 0 4px;}

    &-icon-right {
      > .lol-button-icon {order: 2;}
      > .lol-button-content {order: 1; margin: 0 4px;}
    }

    &-primary { background: #409EFF; }
    &-success { background: #33A03D; }
    &-warning { background: #FFC429; }
    &-danger { background: #DE4561; }
    &-info { background: #909399; }

    & + & {
      margin-left: 4px;
    }
  }

</style>