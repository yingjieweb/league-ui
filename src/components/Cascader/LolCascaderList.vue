<template>
  <div class="lol-cascader-list">
    <div class="lol-cascader-list-left">
      <div class="lol-cascader-list-left-item" v-for="(item, index) in source" :key="index" @click="selectLeftItem(item)">
        <span class="lol-cascader-list-left-item-text">{{item.name}}</span>
        <lol-icon class="lol-cascader-list-left-item-icon" name="right" color="#EDC56E"></lol-icon>
      </div>
    </div>
    <div class="lol-cascader-list-right" v-if="rightSource">
      <lol-cascader-list
              :source="rightSource"
              :level="level + 1"
              :selected="selected"
              @update:selected="onUpdateSelected"
      ></lol-cascader-list>
    </div>
  </div>
</template>

<script>
  import LolIcon from "../Icon/LolIcon"
  import Utils from "../../assets/scripts/utils"

  export default {
    name: "LolCascaderList",
    components: {
      'lol-icon': LolIcon
    },
    props: {
      source: {
        type: Array
      },
      selected: {
        type: Array,
        default: () => []
      },
      level: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        activeName: ''
      }
    },
    computed: {
      rightSource() {
        if (this.selected && this.selected[this.level]) {
          const item = this.source.find((item) => item.name === this.selected[this.level].name)
          if (item && item.children && item.children.length > 0) {
            return item.children
          }
        }
      }
    },
    methods: {
      selectLeftItem(item) {
        this.activeName = item.name
         let selectedCopy = Utils.deepClone(this.selected)
         // Update to current selected item
         selectedCopy[this.level] = item
         // Remove items after that selected item
         selectedCopy.splice(this.level + 1)
         this.$emit('update:selected', selectedCopy)
      },
      onUpdateSelected(updatedSelected) {
        this.$emit('update:selected', updatedSelected)
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