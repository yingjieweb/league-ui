<template>
  <svg v-if="name" :class="classes" :style="styles" @click="$emit('click', $event)">
    <use :xlink:href="`#lol-${name}`"></use>
  </svg>
</template>

<script>
  import '../../assets/icons/index.js'

  export default {
    name: "LolIcon",
    props: {
      name: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: '#C9D4E3'
      },
      isLoading: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: '1em'
      }
    },
    computed: {
      styles() {
        return {
          fill: this.color,
          width: this.size,
          height: this.size
        }
      },
      classes() {
        return [
          'lol-icon',
          {'lol-icon_loading': this.isLoading}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lol-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &_loading {
      animation: spin .5s infinite linear;
    }
  }
</style>