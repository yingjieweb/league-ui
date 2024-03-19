<template>
  <transition name="slide-left">
    <div
      class="lol-carousel-item"
      v-if="isShow"
      :class="{ reverse: isReverse }"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "LolCarouselItem",
  props: {
    name: {
      type: [String, Boolean],
      required: true,
    },
  },
  data() {
    return {
      selected: null,
      isReverse: false,
    };
  },
  computed: {
    isShow() {
      return this.selected === this.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.lol-carousel-item {
}
</style>
