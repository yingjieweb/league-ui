<template>
  <div class="lol-collapse-item" @click="toggle">
    <div class="title">
      {{title}}
    </div>
    <div class="content" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LolCollapseItem",
    inject: ['eventBus'],
    props: {
      title: {
        type: String
      },
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isOpen: false
      }
    },
    mounted() {
      this.eventBus.$on('update:selected', (names) => {
        // Check if this Collapse is selected
        this.isOpen = names.indexOf(this.name) > -1;
      })
    },
    methods: {
      toggle () {
        if (this.isOpen) {
          this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
        } else {
          this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $grey: #ddd;
  $border-radius: 4px;

  .lol-collapse-item {
    > .title {
      padding: 0 8px;
      border: 1px solid $grey;
      margin: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      background: lighten($grey, 8%);
    }

    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }

    &:last-child {
      > .title:last-child {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }

    > .content {
      padding: 8px;
    }
  }
</style>