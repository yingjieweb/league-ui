<template>
  <div
    class="lol-carousel"
    style="border: 1px solid red"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="lol-carousel-window">
      <div
        class="lol-carousel-items"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <slot></slot>
      </div>
      <div v-if="isShowIndicators" class="lol-carousel-indicators">
        <span class="indicator" @click="onClickPrev">
          <lol-icon color="white" name="left"></lol-icon>
        </span>
        <span
          v-for="index in childrenLength"
          :key="index"
          @click="selectItem(index - 1)"
          class="indicator"
          :data-index="index - 1"
          :class="{ active: selectedIndex === index - 1 }"
        >
          {{ index }}
        </span>
        <span class="indicator" @click="onClickNext">
          <lol-icon color="white" name="right"></lol-icon>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import LolIcon from "../Icon/LolIcon";

export default {
  name: "LolCarousel",
  comments: {
    LolIcon,
  },
  props: {
    selected: {
      type: [String, Boolean],
    },
    isAutoPlay: {
      type: [String, Boolean],
      default: true,
    },
    autoPlayDelay: {
      type: Number,
      default: 3000,
    },
    isShowIndicators: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      childrenLength: 0,
      prevIndex: null,
      timerId: null,
      startTouch: {},
    };
  },
  computed: {
    names() {
      return this.items.map((child) => child.name);
    },
    selectedIndex() {
      const index = this.names.indexOf(this.getSelected());
      return index === -1 ? 0 : index;
    },
    items() {
      return this.$children.filter(
        (child) => child.$options.name === "LolCarouselItem"
      );
    },
  },
  methods: {
    getIsReverse() {
      let isReverse = this.selectedIndex <= this.prevIndex;
      if (this.timerId) {
        if (
          this.prevIndex === this.items.length - 1 &&
          this.selectedIndex === 0
        ) {
          isReverse = false;
        }
        if (
          this.prevIndex === 0 &&
          this.selectedIndex === this.items.length - 1
        ) {
          isReverse = true;
        }
      }
      return isReverse;
    },
    autoPlay() {
      if (this.timerId || !this.isAutoPlay) {
        return;
      }
      this.timerId = setTimeout(() => {
        this.updatingSelected();
      }, this.autoPlayDelay);
    },
    selectItem(selectedIndex) {
      this.prevIndex = this.selectedIndex;
      if (selectedIndex === this.names.length) {
        selectedIndex = 0;
      }
      if (selectedIndex === -1) {
        selectedIndex = this.names.length - 1;
      }
      this.$emit("update:selected", this.names[selectedIndex]);
    },
    updatingSelected() {
      let selectedIndex = this.names.indexOf(this.getSelected());
      selectedIndex = selectedIndex + 1;
      // Emit event for info new index
      this.selectItem(selectedIndex);

      this.timerId = setTimeout(() => {
        this.updatingSelected();
      }, this.autoPlayDelay);
    },
    pause() {
      // Stop animation
      window.clearTimeout(this.timerId);
      // Remove timer ID
      this.timerId = null;
    },
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      this.autoPlay();
    },
    getSelected() {
      return this.selected || this.items[0].name;
    },
    updateItems() {
      this.items.forEach((child) => {
        child.isReverse = this.getIsReverse();
        this.$nextTick(() => {
          child.selected = this.getSelected();
        });
      });
    },
    onTouchStart(event) {
      if (event.touches.length > 1) {
        return;
      }
      this.pause();
      this.startTouch = event.touches[0];
    },
    onTouchEnd(event) {
      const endTouch = event.changedTouches[0];
      const offsetX = endTouch.clientX - this.startTouch.clientX;
      const offsetY = endTouch.clientY - this.startTouch.clientY;
      // Only swipe up or down
      if (Math.abs(offsetY) / Math.abs(offsetX) > 1) {
        return;
      }
      if (offsetX > 0) {
        this.selectItem(this.selectedIndex - 1);
      } else {
        this.selectItem(this.selectedIndex + 1);
      }

      this.$nextTick(() => {
        this.autoPlay();
      });
    },
    onClickPrev() {
      this.selectItem(this.selectedIndex - 1);
    },
    onClickNext() {
      this.selectItem(this.selectedIndex + 1);
    },
  },
  mounted() {
    this.updateItems();
    this.autoPlay();
    this.childrenLength = this.items.length;
    this.prevIndex = this.selected;
  },
  updated() {
    this.updateItems();
  },
};
</script>

<style lang="scss" scoped>
$--font-size-mini: 0.8em;
$--color-white: #fff !default;
$--color-black: #000 !default;
$--color-info: #909399 !default;
$--color-bg: #464f6a !default;
$--color-bg-dark: #2b3753 !default;

$--carousel-indicator-font-size: $--font-size-mini !default;
$--carousel-indicator-color: $--color-white !default;
$--carousel-indicator-background: $--color-info !default;
$--carousel-indicator-hover-background: $--color-bg !default;
$--carousel-indicator-active-background: $--color-bg-dark !default;
$--carousel-indicator-width: 20px !default;
$--carousel-indicator-height: 20px !default;

.lol-carousel {
  width: 100%;
  display: flex;
  &-window {
    width: 100%;
  }
  &-items {
    position: relative;
  }
  &-indicators {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    .indicator {
      margin: 0 8px;
      display: inline-flex;
      width: $--carousel-indicator-width;
      height: $--carousel-indicator-height;
      line-height: $--carousel-indicator-height;
      text-align: center;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: $--carousel-indicator-background;
      font-size: $--carousel-indicator-font-size;
      color: $--carousel-indicator-color;
      transition: background-color 0.5s;
      &:hover {
        background: $--carousel-indicator-hover-background;
      }
      &.active {
        background: $--color-bg-dark;
      }
    }
  }
}
</style>
