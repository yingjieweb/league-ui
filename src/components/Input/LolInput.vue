<template>
  <div class="lol-input-wrapper" :class="wrapperClasses">
    <input
            class="lol-input-inner"
            type="text"
            :value="value"
            :disabled="disabled"
            :readonly="readonly"
            :placeholder="placeholder"
            :style="inputStyles"
            :type="type"
            @change="$emit('change', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            @blur="$emit('blur', $event.target.value)"
            @input="$emit('input', $event.target.value)"
    >
    <div class="lol-input-hint" v-if="hint">
      <lol-icon class="lol-input-hint-icon" :name="iconName" :color="iconColor"></lol-icon>
      <small>{{hint}}</small>
    </div>
  </div>
</template>

<script>
  import LolIcon from "../Icon/LolIcon";

  export default {
    name: "LolInput",
    components: {LolIcon},
    props: {
      value: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      iconName: {
        type: String
      },
      hint: {
        type: String
      },
      hintType: {
        type: String,
        validator(hintType) {
          return ['info', 'warning', 'danger', 'success'].indexOf(hintType) > -1
        }
      },
      type: {
        type: String,
        default: 'text'
      },
      width: {
        type: Number,
        default: 200
      },
      rect: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      wrapperClasses() {
        return [
          this.hintType && `lol-input-wrapper-${this.hintType}`
        ]
      },
      inputStyles() {
        return {
          width: this.width + 'px',
          borderRadius: this.rect ? '0' : '4px'
        }
      },
      iconColor() {
        const colors = {
          info: '#909399',
          warning: '#FFC429',
          danger: '#DE4561',
          success: '#33A03D'
        }
        return colors[this.hintType]
      }
    }
  }
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 14px;
  $box-shadow-color: rgb(0, 0, 0, .5);
  $--color-info: #909399;
  $--color-warning: #FFC429;
  $--color-danger: #DE4561;
  $--color-success: #33A03D;


  .lol-input-wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;

    > .lol-input-inner {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      font-size: inherit;
      padding: 0 8px;
      outline: none;

      &:hover, &:active, &:focus {
        background: rgba(255, 255, 255, 1);
        z-index: 1;
      }

      &[disabled] {
        border-color: #ccc;
        color: #ccc;
        cursor: not-allowed;
      }
    }

    .lol-input-hint {
      height: $height;
      display: flex;
      align-items: center;
      padding-right: 1em;
      &-icon { margin-left: 4px; margin-right: 4px;}
    }
  }

  .lol-input-wrapper-danger {
    > .lol-input-inner { border-color: $--color-danger; }
    & small { color: $--color-danger; }
  }
  .lol-input-wrapper-warning {
    > .lol-input-inner { border-color: $--color-warning; }
    & small { color: $--color-warning; }
  }
  .lol-input-wrapper-info {
    > .lol-input-inner { border-color: $--color-info; }
    & small { color: $--color-info; }
  }
  .lol-input-wrapper-success {
    > .lol-input-inner { border-color: $--color-success; }
    & small { color: $--color-success; }
  }
</style>