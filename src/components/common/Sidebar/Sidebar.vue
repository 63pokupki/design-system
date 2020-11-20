<template>
  <aside
    class="spui-Sidebar"
    :class="{ 'spui-Sidebar_is-active': open, [`spui-Sidebar_${position}`]: true }"
  >
    <!-- Содержимое бокового меню -->
    <div
      :style="_style"
      class="spui-Sidebar__body"
    >
      <slot />
    </div>
    <!-- Затемняющий фон -->
    <div
      class="spui-Sidebar__background"
      @click="onClose"
    />
    <!-- Кнопка закрытия -->
    <button
      aria-label="Закрыть боковое меню"
      class="spui-Sidebar__close"
      @click="onClose"
    >
      <i class="ds-icon icon-closing" />
    </button>
  </aside>
</template>

<script>
export default {
    name: "Sidebar",
    props: {
        open: {
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: "left",
            validator(value) {
                return ["left", "right"].indexOf(value) !== -1;
            },
        },
        minWidth: {
            type: String,
        },
        maxWidth: {
            type: String,
        },
    },
    computed: {
        _style() {
            return {
                "min-width": this.minWidth,
                "max-width": this.maxWidth,
            };
        },
    },
    watch: {
        open: {
            handler(value) {
                value ? this.addDisableScroll() : this.removeDisableScroll();
            },
            immediate: true,
        },
    },
    methods: {
        /** отключить прокрутку страницы */
        addDisableScroll() {
            const body = document.querySelector("body");
            if (body) {
                body.classList.add("disable-page-scroll");
            }
        },
        /** включить прокрутку страницы */
        removeDisableScroll() {
            const body = document.querySelector("body");
            if (body) {
                body.classList.remove("disable-page-scroll");
            }
        },
        onClose() {
            this.$emit("close");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./Sidebar.scss";
</style>

<style lang="scss">
.disable-page-scroll {
    overflow: hidden;
}
</style>
