<template>
  <div class="lol-tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
  export default {
    name: "LolTabsHead",
    inject: ['eventBus'],
    created() {
      console.log('爷爷给爸爸的eventbus')
      console.log(this.eventBus)
    }
  }
</script>

<style lang="scss" scoped>

</style>