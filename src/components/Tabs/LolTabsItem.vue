<template>
  <div class="lol-tabs-item" :class="classes" @click="onClickItem">
    <slot></slot>
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
  .lol-tabs-item {
    flex-shrink: 0;
    padding: 0 1em;

    &_active  {
      background-color: red;
    }
  }
</style>