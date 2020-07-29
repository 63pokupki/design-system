<template>
  <button :class="sclass" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Example',
  props: {
    sclass: {
      type: String,
      default: 'normal',
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/elements/_ds-btn.scss";
button {
  border: 2px solid green;
}
</style>
