<template>
    <aside
        class="spui-Sidebar"
        :class="{ 'spui-Sidebar_is-active': open, [`spui-Sidebar_${position}`]: true }"
    >
        <!-- Содержимое бокового меню -->
        <div :style="_style" class="spui-Sidebar__body">
            <slot></slot>
        </div>
        <!-- Затемняющий фон -->
        <div @click="onClose" class="spui-Sidebar__background"></div>
        <!-- Кнопка закрытия -->
        <button aria-label="Закрыть боковое меню" @click="onClose" class="spui-Sidebar__close">
            <i class="ds-icon icon-closing"></i>
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
            validator: function (value) {
                return ["left", "right"].indexOf(value) != -1;
            },
        },
        minWidth: {
            type: String,
        },
        maxWidth: {
            type: String,
        },
    },
    watch: {
        open: {
            handler: function (value) {
                value ? this.addDisableScroll() : this.removeDisableScroll();
            },
            immediate: true,
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
