<template>
  <div class="lol-tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolTabsItem",
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