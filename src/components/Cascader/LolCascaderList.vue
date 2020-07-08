<template>
  <div class="lol-cascader-list">
    <div class="lol-cascader-list-left">
      <div class="lol-cascader-list-left-item" v-for="(item, index) in source" :key="index" @click="leftSelected = item">
        <span class="lol-cascader-list-left-item-text">{{item.name}}</span>
        <lol-icon class="lol-cascader-list-left-item-icon" name="right" color="#EDC56E"></lol-icon>
      </div>
    </div>
    <div class="lol-cascader-list-right" v-if="rightItem">
      <lol-cascader-list :source="rightItem"></lol-cascader-list>
    </div>
  </div>
</template>

<script>
  import LolIcon from "../Icon/LolIcon"

  export default {
    name: "LolCascaderList",
    components: {
      'lol-icon': LolIcon
    },
    props: {
      source: {
        type: Array
      }
    },
    data() {
      return {
        leftSelected: null
      }
    },
    computed: {
      rightItem() {
        return (this.leftSelected && this.leftSelected.children) ? this.leftSelected.children : null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lol-cascader-list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;

    &-left {
      height: 100%;
      padding: .3em 0em;
      overflow: auto;

      &-item {
        padding: 0.3em 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-icon {
          margin-left: 1em;
          transform: scale(0.9);
        }
      }
    }
    &-right {
      height: 100%;
      border-left: 1px solid grey;
    }
  }
</style>