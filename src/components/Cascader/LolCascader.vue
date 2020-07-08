<template>
  <div class="lol-cascader">
    <div class="lol-cascader-trigger">
      <slot></slot>
    </div>
    <div class="lol-cascader-popover">
      <div v-for="item in source">
        <lol-cascader-list :source-item="item"></lol-cascader-list>
      </div>
    </div>
  </div>
</template>

<script>
  import LolCascaderList from "./LolCascaderList"

  export default {
    name: "LolCascader",
    components: {
      'lol-cascader-list': LolCascaderList
    },
    props: {
      source: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/global';

  .lol-cascader {

  }
</style>