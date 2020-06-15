<template>
  <button class="lol-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <lol-icon class="icon" v-if="icon && !isLoading" :name="icon"></lol-icon>
    <lol-icon class="loading icon" v-if="isLoading" name="loading"></lol-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    name: "LolButton",
    props: {
      icon: {
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
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

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

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    > .icon {
      order: 1;
    }

    > .content {
      order: 2;
      margin: 0 4px;
    }

    &.icon-right {
      > .icon {
        order: 2;
      }

      > .content {
        order: 1;
        margin: 0 4px;
      }
    }

    .loading {
      animation: spin 1.5s infinite linear;
    }
  }

</style>