<template>
  <div class="lol-hero" @click="$emit('click')" :class="heroClasses" :title="hero">
    <div class="lol-hero-avatar" :class="avatarClasses" :style="avatarStyles"></div>
  </div>
</template>

<script>
  export default {
    name: "LolHero",
    props: {
      hero: {
        type: String,
      },
      size: {
        type: String,
        validator(size) {
          return ['small', 'middle', 'large'].includes(size)
        }
      },
      isActive: {
        type: Boolean,
        default: false
      },
      url: {
        type: String
      }
    },
    computed: {
      heroClasses() {
        return {active: this.isActive}
      },
      avatarStyles() {
        return {
          backgroundImage: `url(${this.url ? this.url : `https://game.gtimg.cn/images/lol/act/img/champion/${this.hero}.png`})`
        }
      },
      avatarClasses() {
        return [this.size]
      }
    }
  }
</script>

<style scoped lang="scss">
  $--color-info: #909399;
  $league-gold: #EDC56E;
  $league-dark: #333333;

  .lol-hero {
    display: inline-flex;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 4px;
    overflow: hidden;
    transition: all .5s;

    &:hover, &.active {
      transform: scale(1.2);
      box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 1);
    }
    &-avatar {
      &.large {
        width: 77px;
        height: 76px;
      }
      &.small {
        width: 55px;
        height: 54px;
      }
      width: 66px;
      height: 65px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    & + & {
      margin-left: 10px;
    }
  }
</style>