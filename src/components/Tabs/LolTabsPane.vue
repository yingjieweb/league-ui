<template>
  <div class="lol-tabs-pane" :class="classes" v-show="active" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolTabsPane",
    inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: String | Number,
        require: true
      }
    },
    computed: {
      classes () {
        return {
          'lol-tabs-pane_active': this.active,
          'lol-tabs-pane_disabled': this.disabled
        }
      }
    },
    created() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lol-tabs-pane {

    &_active  {
      /*background-color: red;*/
    }
  }
</style>