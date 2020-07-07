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
  $--color-info: #909399;
  $league-gold: #EDC56E;
  $league-dark: #333333;

  $league-box-shadow: rgba(0, 0, 0, 0.5);

  .lol-collapse-item {
    > .title {
      padding: 0 8px;
      margin: 2px 0;
      min-height: 32px;
      display: flex;
      align-items: center;
      background: $--color-info;
      color: white;
    }

    > .content {
      padding: 8px;
      border: 1px solid $league-gold;
      background: $league-dark;
      color: $league-gold;
    }
  }
</style>