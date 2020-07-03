<template>
  <div ref="popover" class="lol-popover" @click="onClick">
    <div ref="contentWrapper" class="lol-popover-content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="lol-popover-trigger-wrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "LolPopover",
    data () {
      return {
        visible: false,
      }
    },
    methods: {
      onClick(event) {
        // Click button of LolPopover, then open it
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          }else {
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
        const {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.top = top + window.screenX + 'px'
        this.$refs.contentWrapper.style.left = left + window.scrollY +  'px'
      },
      onDocClick(event) {
        // Click outside of LolPopover, then close it
        if (this.$refs.popover && (this.$refs.popover === event.target || this.$refs.popover.contains(event.target))) {
          return;
        }
        this.close();
      },
    }
  }
</script>

<style lang="scss" scoped>
  .lol-popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .lol-popover-content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
</style>