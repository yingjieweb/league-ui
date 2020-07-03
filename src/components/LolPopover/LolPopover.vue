<template>
  <div ref="popover" class="lol-popover">
    <div ref="contentWrapper" class="lol-popover-content-wrapper" v-if="visible" :class="contentClasses">
      <slot name="content" :close="close"></slot>
    </div>

    <!--<transition name="fade">
      <span ref="contentWrapper" class="lol-popover-content-wrapper" v-if="visible" :class="contentClasses">
          <slot name="content" :close="close"></slot>
      </span>
    </transition>-->

    <span ref="triggerWrapper" class="lol-popover-trigger-wrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "LolPopover",
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) > -1
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(trigger) {
          return ['click', 'hover'].indexOf(trigger) > -1
        }
      }
    },
    data() {
      return {
        visible: false,
      }
    },
    mounted () {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    destroyed () {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
    },
    computed: {
      contentClasses() {
        return [`lol-popover-content-wrapper-position-${this.position}`]
      },
      openEvent () {
        return this.trigger === 'click' ? "click" : "mouseenter"
      },
      closeEvent () {
        return this.trigger === 'click' ? "click" : "mouseleave"
      }
    },
    methods: {
      onClick(event) {
        // Click button of LolPopover, then open it
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      },
      open() {
        this.visible = true
        this.$nextTick(() => {
          // Set content position
          this.setContentPosition()
          // Set event handler to listen to document click event
          document.addEventListener('click', this.onDocClick)
        })
      },
      close() {
        this.visible = false
        this.$emit('close')
        // Remove event listener after closing LolPopover
        document.removeEventListener('click', this.onDocClick)
      },
      setContentPosition() {
        // Append content to document.body
        document.body.appendChild(this.$refs.contentWrapper)

        // Get button wrapper styles
        const {contentWrapper, triggerWrapper} = this.$refs
        const {height: contentHeight} = contentWrapper.getBoundingClientRect()
        const {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        const positions = {
          top: {
            top: top + window.scrollY,
            left: left + window.scrollX
          },
          bottom: {
            top: top + height + window.scrollY,
            left: left + window.scrollX
          },
          left: {
            top: top + window.scrollY + (height - contentHeight)/2,
            left: left + window.scrollX
          },
          right: {
            top: top + window.scrollY + (height - contentHeight)/2,
            left: left + window.scrollX + width
          }
        }
        contentWrapper.style.top = positions[this.position].top + 'px'
        contentWrapper.style.left = positions[this.position].left + 'px'
      },
      onDocClick(event) {
        // Click outside of LolPopover, then close it
        if (this.$refs.popover && (this.$refs.popover === event.target || this.$refs.popover.contains(event.target))) {
          return
        }
        if (this.$refs.contentWrapper && (this.$refs.contentWrapper === event.target || this.$refs.contentWrapper.contains(event.target))) {
          return
        }
        this.close()
      },
    }
  }
</script>

<style lang="scss" scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  $popover-arrow-color: white;

  .lol-popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .lol-popover-content-wrapper {
    position: absolute;
    padding: 0.8em 1em;
    border: 1px solid $popover-arrow-color;
    border-radius: $border-radius;
    filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.5));
    background-color: white;
    max-width: 20em;
    word-break: break-all;

    &::before {
      content: '';
      width: 0;
      height: 0;
      display: block;
      border: 10px solid transparent;
      position: absolute;
    }

    &-position-top {
      margin-top: -10px;
      transform: translateY(-100%);

      &::before {
        left: 10px;
      }
      &::before {
        border-top-color: white;
        border-bottom: none;
        top: 100%;
      }
    }

    &-position-bottom {
      margin-top: 10px;

      &::before {
        left: 10px;
      }
      &::before {
        border-bottom-color: $popover-arrow-color;
        border-top: none;
        bottom: 100%;
      }
    }

    &-position-left {
      transform: translateX(-100%);
      margin-left: -10px;

      &::before {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-left-color: $popover-arrow-color;
        border-right: none;
        left: 100%;
      }
    }

    &-position-right {
      margin-left: 10px;

      &::before {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-right-color: $popover-arrow-color;
        border-left: none;
        right: 100%;
      }
    }
  }

  .lol-popover-trigger-wrapper {
    display: inline-block;
  }
</style>