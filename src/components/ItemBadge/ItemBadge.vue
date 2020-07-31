<template>
  <span class="ItemBadge" :class="[_color, _pos]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "ItemBadge",
  props: {
    'color': {
      type: String,
      default: 'primary'
    },
    "pos": {
      type: String,
      default: "left-top"
    }
  },
  computed: {
    _color() {
      return 'ItemBadge_' + this.color;
    },
    _pos() {
      return 'ItemBadge_' + this.pos;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./ItemBadge.scss";
</style>