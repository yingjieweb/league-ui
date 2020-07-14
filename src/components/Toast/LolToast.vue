<template>
  <div :class="classes" :style="styles" ref="lolToast">
    <lol-icon class="lol-toast-icon" :name="iconName" :color="iconColor" size="1.5em" :is-loading="type==='loading'"></lol-icon>

    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="this.$slots.default"></div>

    <div class="spaceLine" ref="spaceLine"></div>
    <span class="closeButton" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
  import LolIcon from "../Icon/LolIcon"

  export default {
    name: "LolToast",
    components: {'lol-icon': LolIcon},
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: 5,
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
      },
      type: {
        type: String,
        default: 'loading',
        validator: (type) => {
          return ['loading', 'success', 'info', 'warning', 'danger'].indexOf(type) > -1
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
      },
      iconName() {
        const names = {
          loading: 'loading',
          success: 'check-fill',
          info: 'notice-fill',
          warning: 'warn-fill',
          danger: 'close-fill'
        }
        return names[this.type]
      },
      iconColor() {
        const colors = {
          loading: '#409EFF',
          success: '#33A03D',
          info: '#909399',
          warning: '#FFC429',
          danger: '#DE4561'
        }
        return colors[this.type]
      },
      styles() {
        const fontColors = {
          loading: '#409EFF',
          success: '#33A03D',
          info: '#909399',
          warning: '#FFC429',
          danger: '#DE4561'
        }
        const bgColors = {
          loading: '#ECF5FF',
          success: '#F0F9EB',
          info: '#EDF2FC',
          warning: '#FDF6EC',
          danger: '#FEF0F0'
        }
        const borderColors = {
          loading: '#C6E2FF',
          success: '#E1F3D9',
          info: '#EEF1F7',
          warning: '#FBF0DF',
          danger: '#FDE5E5'
        }
        return {
          color: fontColors[this.type],
          backgroundColor: bgColors[this.type],
          border: `1px solid ${borderColors[this.type]}`
        }
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
        console.log('调用 Toast 组件的内部方法！')
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
  $toast-bg: rgba(144, 147, 153, 0.9);
  $toast-border-show: rgba(0, 0, 0, 0.50);
  $animation-duration: 500ms;

  @keyframes toast-fade-in {
    0% {opacity: 0;top: 0;}
    100% {opacity: 1;top: 20px;}
  }

  .lol-toast {
    animation: toast-fade-in $animation-duration;
    min-height: $toast-min-height;
    font-size: $font-size;
    line-height: 1.8;

    position: fixed;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);

    display: flex;
    align-items: center;

    background: $toast-bg;
    border-radius: 4px;
    /*box-shadow: 0px 0px 3px 0px $toast-border-show;*/
    color: white;
    padding: 0 16px;

    &-icon {
      margin-right: 16px;
    }

    .spaceLine {
      height: 100%;
      border-left: 1px solid white;
      margin-left: 16px;
    }

    .closeButton {
      margin-left: 16px;
      flex-shrink: 0;
    }

    &-position-top {top: 20px; transform: translateX(-50%);}
    &-position-middle {top: 50%; transform: translate(-50%, -50%);}
    &-position-bottom {bottom: 0; transform: translateX(-50%);}
  }
</style>