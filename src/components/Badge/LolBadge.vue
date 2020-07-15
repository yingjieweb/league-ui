<template>
  <span class="lol-badge">
    <span v-if="isDot" class="lol-badge-dot"></span>
    <span v-else-if="hasChildren" class="lol-badge-sup">{{title}}</span>
    <span v-else class="lol-badge-none">{{title}}</span>
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: "LolBadge",
    props: {
      title: {
        type: String
      },
      isDot: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        hasChildren: false
      }
    },
    mounted() {
      this.hasChildren = Boolean(this.$slots.default)
    }
  }
</script>

<style lang="scss" scoped>
  $--badge-height: 18px;
  $--badge-default-color: #F8CC45;
  $--badge-hover-color: #FEFF74;
  $--badge-line-height: 14px;
  $--badge-font-size: .8em;
  $--badge-background: rgba(0, 0, 0, 0.2);
  $--border-radius-base: 4px;
  $--border-radius-circle: 100%;

  @keyframes glowing {
    0% {
      border-color: $--badge-default-color;
      color: $--badge-default-color;
    }
    50% {
      border-color: $--badge-hover-color;
      color: $--badge-hover-color;
    }
    100% {
      border-color: $--badge-default-color;
      color: $--badge-default-color;
    }
  }

  .lol-badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;

    &-sup, &-dot, &-none {
      animation: glowing 2s infinite ease-in-out;
      background: $--badge-background;
      line-height: $--badge-line-height;
      font-size: $--badge-font-size;
    }

    &-sup {
      position: absolute;
      top: -15px;
      left: 100%;
      height: $--badge-height;
      margin-left: -4px;
      margin-top: 4px;
      padding: 0 2px;
      border: 2px solid;
      border-radius: $--border-radius-base;
    }

    &-dot {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: -4px;
      margin-top: -2px;
      border: 4px solid;
      border-radius: $--border-radius-circle;
    }

    &-none {
      display: inline-block;
      height: $--badge-height;
      vertical-align: top;
      padding: 0 4px;
      border: 2px solid;
      border-radius: $--border-radius-base;
    }
  }
</style>
