<template>
  <div class="lol-progress">
      <div ref="outer" class="progress-outer" :style="outerStyles">
        <div ref="inner" class="progress-inner" :style="innerStyles">
          <span ref="insideText" class="inside-text" :style="textStyles" v-if="textPosition === 'inside'">{{percentage}}</span>
        </div>
        <span ref="followText" class="follow-text" :style="textStyles" v-if="textPosition === 'follow'">{{percentage}}</span>
      </div>
      <span ref="outsideText" class="outside-text" :style="textStyles" v-if="textPosition === 'outside'">{{percentage}}</span>
  </div>
</template>

<script lang="js">
  export default {
    name: "LolProgress",
    props: {
      width: {
        type: Number | String,
        default: 100
      },
      height: {
        type: Number | String,
        default: 22,
      },
      percentage: {
        type: Number | String,
        default: 0,
      },
      activeColor: {
        type: String,
        default: '#409EFF'
      },
      inactiveColor: {
        type: String,
        default: '#E4E7ED'
      },
      textColor: {
        type: String,
        default: 'green'
      },
      textSize: {
        type: Number | String,
        default: 22,
      },
      textWeight: {
        type: Number | String,
        default: 40,
      },
      textPosition: {
        type: String,
        default: 'inside' // inside follow outside
      }
    },
    computed: {
      outerStyles() {
        return {
          width: this.width + 'px',
          height: this.height + 'px',
          borderRadius: this.height / 2 + 'px',
          background: this.inactiveColor
        }
      },
      innerStyles() {
        return {
          width: parseFloat(this.percentage * this.width / 100).toFixed(2) + 'px',
          height: this.height + 'px',
          borderRadius: this.height / 2 + 'px',
          background: this.activeColor
        }
      },
      textStyles() {
        return {
          color: this.textColor,
          fontSize: this.textSize + 'px',
          fontWeight: this.textWeight,
          lineHeight: this.height + 'px',
        }
      }
    },
    methods: {
      setInnerStyles() {
        let temp = { inside: 'insideText', follow: 'followText', outside: 'outsideText' }
        this.$refs[temp[this.textPosition]].style.left = parseInt(this.$refs.inner.style.width) - 30 + 'px';
      }
    },
    mounted() {
      this.setInnerStyles()
    }
  }
</script>

<style lang="scss" scoped>
  .lol-progress {
    display: flex;
    align-items: center;
    display: inline-flex;

    .progress-outer {
      display: flex;
      background: gray;

      .progress-inner {
        position: relative;

        .inside-text { position: absolute; }
      }

      .follow-text { margin-left: 10px; }
    }

    .outside-text { margin-left: 10px;}
  }
</style>
