<template>
  <div class="lol-tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "LolTabs",
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.checkChildren()
      this.initActiveTab()
    },
    methods: {
      initActiveTab() {
        this.eventBus.$emit('update:selected', this.selected)
      },
      checkChildren() {
        if (this.$children.length === 0) {
          console && console.warn && console.warn('LolTabs children should only be LolTabsHead or LolTabsBody')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>