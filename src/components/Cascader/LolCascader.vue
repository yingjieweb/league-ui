<template>
  <div class="lol-cascader">
    <div class="lol-cascader-trigger" @click="isPopoverShow = !isPopoverShow">
      <slot></slot>
    </div>
    <div v-if="isPopoverShow" class="lol-cascader-popover" :style="popoverStyles">
      <lol-cascader-list v-show="isPopoverShow" :source="source"></lol-cascader-list>
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
      },
      height: {
        type: [String, Number],
        default: 180
      }
    },
    data() {
      return {
        isPopoverShow: false
      }
    },
    computed: {
      popoverStyles() {
        return {
          height: `${this.height}px`
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
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);
  }

  .lol-cascader {
    position: relative;

    &-trigger {

    }
    &-popover {
      @extend cascader-box-shadow;

      position: absolute;
      top: 100%;
      left: 0;
      background-color: $league-dark;
      color: $league-gold;
      border-radius: $cascader-border-radius;
    }
  }
</style>