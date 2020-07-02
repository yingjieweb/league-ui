<template>
  <div class="lol-tabs-item" :class="classes" @click="onClickItem" :data-name="name">
    <div class="lol-tabs-item-content">
      <slot></slot>
    </div>
    <div class="lol-tabs-item-line"></div>
  </div>
</template>

<script>
  export default {
    name: "LolTabsItem",
    inject: ['eventBus'],
    props: {
      name: {
        type: String | Number,
        require: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        active: false
      }
    },
    computed: {
      classes() {
        return {
          'lol-tabs-item_active': this.active,
          'lol-tabs-item_disabled': this.disabled
        }
      }
    },
    created: function () {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name
        })
      }
    },
    methods: {
      onClickItem() {
        if (!this.disabled) {
          this.eventBus && this.eventBus.$emit('update:selected', this.name)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $lol-tabs-item-active-bgc: #5D91BC;
  $lol-tabs-item-line-active-bgc: #79BBFF;
  $lol-tabs-item-text-active-color: #79BBFF;

  .lol-tabs-item {
    height: 100%;
    flex-shrink: 0;
    user-select: none;
    position: relative;
    cursor: pointer;

    &-content {
      height: 100%;
      padding: 0 1em;
      display: flex;
      align-items: center;
    }

    &-line {
      width: 0;
      height: 2px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      background: $lol-tabs-item-line-active-bgc;
      transition: width .3s;
    }

    // LolIcon
    svg {
      fill: red;
    }

    &:hover {
      color: $lol-tabs-item-text-active-color;
    }

    &_active {
      color: $lol-tabs-item-text-active-color;
      background: $lol-tabs-item-active-bgc;

      .lol-tabs-item-line {
        width: 100%;
      }

      // LolIcon
      svg {
        fill: red;
      }
    }

    &_disabled {
      color: #cccccc;
      cursor: not-allowed;
    }
  }
</style>