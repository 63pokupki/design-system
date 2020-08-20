<template>
    <span @click.stop :class="[base, _type, _position, _centered]"><slot></slot></span>
</template>

<script>
export default {
    name: "Tooltip",
    props: {
        type: {
            type: String,
            default: ""
        },
        position: {
            type: String,
            default: "bottom"
        },
        centered: {
            type: Boolean,
            default: false
        },
        forced: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            base: "spui-Tooltip"
        };
    },
    mounted() {
        console.log(this._forced);
        this.$parent.$el.classList.add(this._forced);
    },
    beforeDestroy() {
        this.$parent.$el.classList.remove(this._forced);
    },
    computed: {
        _type() {
            return this.type ? `${this.base}_${this.type}` : null;
        },
        _position() {
            return `${this.base}_${this.position}`;
        },
        _centered() {
            return this.centered ? `${this.base}_ta-c` : null;
        },
        _forced() {
            return this.forced ? "has-tooltip-force" : "has-tooltip";
        }
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
@import "./Tooltip.scss";
</style>

<style lang="scss">
// показ при наведении и клике
.has-tooltip {
    cursor: pointer;
    position: relative;
    &:hover > .spui-Tooltip {
        visibility: visible;
        opacity: 1;
        z-index: 100;
        transition: opacity $transition-primary, visibility $transition-primary;
    }
}

// принудительный постоянный показ
.has-tooltip-force {
    cursor: pointer;
    position: relative;
    .spui-Tooltip {
        visibility: visible !important;
        opacity: 1 !important;
        z-index: 100 !important;
        transition: opacity $transition-primary, visibility $transition-primary;
    }
}
</style>
