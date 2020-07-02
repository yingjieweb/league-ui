<template>
  <div class="lol-tabs-item" :class="classes" @click="onClickItem">
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
    data () {
      return {
        active: false
      }
    },
    computed: {
      classes () {
        return {
          'lol-tabs-item_active': this.active,
          'lol-tabs-item_disabled': this.disabled
        }
      }
    },
    created: function () {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    },
    methods: {
      onClickItem() {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $lol-tabs-head-height: 40px;

  .lol-tabs-item {
    height: 100%;
    flex-shrink: 0;
    user-select: none;
    position: relative;

    &-content {
      height: 100%;
      padding: 0 1em;
      display: flex;
      align-items: center;
    }
    &-line {
      width: 0;
      position: absolute;
      height: 3px;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      background: #01FFFF;
      transition: width .3s;
    }
    // LolIcon
    svg {
      fill: red;
    }
    &:hover, &_active {
      color: white;
      background: lavenderblush;
      .lol-tabs-item-line {
        width: 100%;
      }
      // LolIcon
      svg {
        fill: red;
      }
    }
  }
</style>