<template>
  <div :class="classes" ref="lolToast">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="this.$slots.default"></div>

    <div class="spaceLine" ref="spaceLine"></div>
    <span class="closeButton" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
  export default {
    name: "LolToast",
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: true,
        validator: (value) => {
          return value === false || typeof value === 'number'
        }
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator: (position) => {
          return ['top', 'middle', 'bottom'].indexOf(position) > -1
        }
      }
    },
    mounted() {
      this.updateSpaceLineStyle()
      this.executeAutoClose()
    },
    computed: {
      classes() {
        return [
            'lol-toast',
            { [`lol-toast-position-${this.position}`]: true, }
        ]
      }
    },
    methods: {
      updateSpaceLineStyle() {
        this.$nextTick(() => {
          this.$refs.spaceLine.style.height = `${this.$refs.lolToast.getBoundingClientRect().height}px`
        })
      },
      close() {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      executeAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose * 1000)
        }
      },
      log() {
        console.log('测试')
      },
      onClickClose() {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this) //this === toast 实例
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  $toast-border-show: rgba(0, 0, 0, 0.50);
  $animation-duration: 3000ms;

  @keyframes toast-fade-in {
    0% {opacity: 0; }
    100% {opacity: 1;}
  }

  .lol-toast {
    animation: toast-fade-in $animation-duration;
    min-height: $toast-min-height;
    font-size: $font-size;
    line-height: 1.8;

    position: fixed;
    left: 50%;

    display: flex;
    align-items: center;

    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px $toast-border-show;
    color: white;
    padding: 0 16px;

    .spaceLine {
      height: 100%;
      border-left: 1px solid #666666;
      margin-left: 16px;
    }

    .closeButton {
      margin-left: 16px;
      flex-shrink: 0;
    }

    &-position-top {
      top: 0;
      transform: translateX(-50%);
    }
    &-position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &-position-bottom {
      bottom: 0;
      transform: translateX(-50%);
    }
  }
</style>