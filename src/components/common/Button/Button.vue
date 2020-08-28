<template>
  <button
    :disabled="isDisabled"
    class="spui-Button"
    :class="[_type, _block, _iconpos, {'is-loading': isLoading, 'is-disabled': isDisabled}]"
  >
    <i v-if="icon.name && icon.pos == 'left'" class="ds-icon spui-Button__icon" :class="icon.name"></i>
    <slot>Кнопка</slot>
    <i v-if="icon.name && icon.pos == 'right'" class="ds-icon spui-Button__icon" :class="icon.name"></i>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    icon: {
      type: Object,
      default: () => ({
        name: '',
        pos: '' //left/right
      }),
    },
    block: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    _type() {
      return `spui-Button_${this.type}`;
    },
    _block() {
      return this.block ? `spui-Button_block` : "";
    },
    _iconpos() {
      return this.icon.pos ? `spui-Button_icon-${this.icon.pos}` : '';
    }
  },
  methods: {
    onClick() {
      if (!this.isLoading) {
        this.$emit("click");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Button.scss";
</style>