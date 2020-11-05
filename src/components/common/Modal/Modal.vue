<template>
    <div v-if="open" class="spui-Modal">
        <div :style="_styleWindow" class="spui-Modal__window">
            <div class="spui-Modal__head">
                <div class="spui-Modal__slot-head">
                    <slot v-if="_isSlotHeadExist" name="head"></slot>
                </div>
                <button @click="onClose" class="spui-Modal__close">
                    <i class="ds-icon icon-closing"></i>
                </button>
            </div>
            <slot v-if="$slots['before-body']" name="before-body"></slot>
            <div class="spui-Modal__body"><slot></slot></div>
            <slot v-if="$slots['after-body']" name="after-body"></slot>
        </div>
        <div @click="onClose" class="spui-Modal__bg"></div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: {
        open: {
            type: Boolean,
            default: false,
        },
        width: {
            type: String,
        },
        maxWidth: {
            type: String,
        },
        maxHeight: {
            type: String,
        },
        minWidth: {
            type: String,
        },
        minHeight: {
            type: String,
        }
    },
    data() {
        return {
            base: "spui-Modal",
        };
    },
    computed: {
        _styleWindow() {
            return {
                "max-width": this.maxWidth,
                "max-height": this.maxHeight,
                "min-height": this.minHeight,
                "min-width": this.minWidth,
                width: this.width,
            };
        },
        _isSlotHeadExist() {
            return Boolean(this.$slots["head"]);
        },
    },
    methods: {
        onClose() {
            this.$emit("close");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./Modal.scss";
</style>
