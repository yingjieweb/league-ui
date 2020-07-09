<template>
  <div class="lol-cascader-list">
    <div class="lol-cascader-list-left">
      <div class="lol-cascader-list-left-item"
           :class="{active: item.name === activeName}"
           v-for="(item, index) in source"
           :key="index"
           @click="selectLeftItem(item)">
        <span class="lol-cascader-list-left-item-text">{{item.name}}</span>
        <span class="lol-cascader-list-left-item-icons">
          <template v-if="item.name === loadingItem.name">
            <lol-icon name="loading" :is-loading="true"></lol-icon>
          </template>
          <template v-else>
            <lol-icon name="right" v-if="showIcon(item)"></lol-icon>
          </template>
        </span>
      </div>
    </div>
    <div class="lol-cascader-list-right" v-if="rightSource">
      <lol-cascader-list
              :source="rightSource"
              :level="level + 1"
              :selected="selected"
              @update:selected="onUpdateSelected"
              :load-data="loadData"
              :loading-item="loadingItem"
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
      },
      loadData: {
        type: Function
      },
      loadingItem: {
        type: Object,
        default: () => ({})
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
      },
      showIcon(item) {
        return this.loadData ? !item.isLeaf : item.children
      }
    }
  }
</script>

<style lang="scss" scoped>
  $league-white: #FFFFFF;
  $league-gold: #EDC56E;
  $league-dark: #333333;
  $cascader-border-radius: 3px;
  cascader-box-shadow {
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.9);
  }

  .lol-cascader-list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;

    &-left {
      height: 100%;
      overflow: auto;

      &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100px;
        padding: 0.2em 1em;
        margin: 0 .3em;
        transition: all 0.5s;
        border: 1px solid transparent;
        border-radius: $cascader-border-radius;

        &-text {
          user-select: none;
        }

        &-icons {
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(0.9);

          svg {
            fill: $league-gold !important;
          }
        }

        &.active {
          border: 1px solid $league-gold;
        }
        &:hover {
          background: $league-gold;
          color: $league-white;
          svg {
            fill: $league-white !important;
          }
        }
      }
    }
    &-right {
      height: 100%;
      border-left: 1px solid grey;
    }
  }
</style>