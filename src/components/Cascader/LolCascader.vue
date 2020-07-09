<template>
  <div class="lol-cascader" v-click-outside="close">
    <div class="lol-cascader-trigger" @click="togglePopover">
      <slot></slot>
      {{selectedValue}}
    </div>
    <div v-if="isPopoverShow" class="lol-cascader-popover" :style="popoverStyles">
      <lol-cascader-list
              :source="source"
              :selected="selected"
              @update:selected="onUpdateSelected"
              :load-data="loadData"
              :loading-item="loadingItem"
      ></lol-cascader-list>
    </div>
  </div>
</template>

<script>
  import LolInput from "../Input/LolInput"
  import LolCascaderList from "./LolCascaderList"
  import ClickOutside from "../../directives/ClickOutside"

  export default {
    name: "LolCascader",
    components: {
      'lol-input': LolInput,
      'lol-cascader-list': LolCascaderList
    },
    directives: { ClickOutside },
    props: {
      source: {
        type: Array
      },
      selected: {
        type: Array,
        default: () => []
      },
      height: {
        type: [String, Number],
        default: 180
      },
      loadData: {
        type: Function
      }
    },
    data() {
      return {
        isPopoverShow: false,
        loadingItem: {}
      }
    },
    computed: {
      popoverStyles() {
        return {
          height: `${this.height}px`
        }
      },
      selectedValue() {
        return this.selected.map((item) => item.name).join('/')
      }
    },
    methods: {
      open() {
        this.isPopoverShow = true
      },
      close() {
        this.isPopoverShow = false
      },
      togglePopover() {
        if (this.isPopoverShow) {
          this.close()
        }
        else {
          this.open()
        }
      },
      onUpdateSelected(updatedSelected) {
        this.$emit('update:selected', updatedSelected)
        let onClickItem = updatedSelected[updatedSelected.length - 1]

        let simplest = (children, id) => {
          return children.filter(item => item.id === id)[0]
        }
        let complex = (children, id) => {
          let noChildren = []
          let hasChildren = []
          children.forEach(item => {
            if (item.children) {
              hasChildren.push(item)
            } else {
              noChildren.push(item)
            }
          })
          let found = simplest(noChildren, id)
          if (found) {
            return found
          } else {
            found = simplest(hasChildren, id)
            if (found) { return found }
            else {
              for (let i = 0; i < hasChildren.length; i++) {
                found = complex(hasChildren[i].children, id)
                if (found) {
                  return found
                }
              }
              return undefined
            }
          }
        }

        let updateSource = (onClickItemChildren) => {
          this.loadingItem = {}
          let sourceCopy = JSON.parse(JSON.stringify(this.source))
          let toUpdate = complex(sourceCopy, onClickItem.id)
          toUpdate.children = onClickItemChildren

          this.$emit('update:source', sourceCopy)
        }
        if (!onClickItem.isLeaf && this.loadData) {
          this.loadData(onClickItem, updateSource) //调用外界传入的函数
          this.loadingItem = onClickItem
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/global';

  $league-white: #FFFFFF;
  $league-gold: #EDC56E;
  $league-dark: #333333;
  $cascader-border-radius: 4px;
  cascader-box-shadow {
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.9);
  }

  .lol-cascader {
    position: relative;

    &-trigger {

    }
    &-popover {
      @extend cascader-box-shadow;

      position: absolute;
      top: 110%;
      left: 0;
      background-color: $league-dark;
      color: $league-gold;
      border-radius: $cascader-border-radius;
      z-index: 1;
    }
  }
</style>