<template>
  <div class="lol-tabs-pane" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolTabsPane",
    props: {
      name: {
        type: String | Number,
        require: true
      }
    },
    inject: ['eventBus'],
    created() {
      console.log('爷爷给孙子的的eventbus')
      console.log(this.eventBus)

      this.eventBus.$on('update:selected', (name) => {
        console.log(name)
      })
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>