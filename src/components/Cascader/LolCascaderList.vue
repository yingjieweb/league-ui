<template>
  <div class="lol-cascader-list">
    {{sourceItem.name}}
    <lol-cascader-list
            v-if="sourceItem.children"
            v-for="(item, index) in sourceItem.children"
            :key="index"
            :source-item="item">
    </lol-cascader-list>
  </div>
</template>

<script>
  export default {
    name: "LolCascaderList",
    props: {
      sourceItem: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>