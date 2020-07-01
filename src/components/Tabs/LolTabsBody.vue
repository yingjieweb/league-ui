<template>
  <div class="lol-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LolTabsBody",
    inject: ['eventBus'],
    created() {
      console.log('爷爷给爸爸的eventbus')
      console.log(this.eventBus)
    }
  }
</script>

<style lang="scss" scoped>

</style>