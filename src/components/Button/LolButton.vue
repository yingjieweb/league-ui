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
  .lol-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    border: none;
    outline: none;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 1);
    }

    &:active {
      background-color: var(--button-active-bg);
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

    &-primary { background: #79BBFF; }
    &-success { background: #67C23A; }
    &-warning { background: #E6A23C; }
    &-danger { background: #F56C6C; }
    &-info { background: #909399; }

    & + & {
      margin-left: 4px;
    }
  }

</style>