<template>
  <button
    @click="onClick"
    class="BtnFavorite"
    :class="{'is-active':isActive, 'is-loading': isLoading}"
  >
    <i
      class="BtnFavorite__icon ds-icon"
      :class="{'icon-heart-bold': !isActive, 'icon-heart-filled': isActive}"
    ></i>
  </button>
</template>

<script>
export default {
  name: "BtnFavorite",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
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
@import "./BtnFavorite.scss";
</style>