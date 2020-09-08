<template>
    <label :for="uniqid" class="spui-Switcher" :class="[_position, _checked, _disabled, _type]">
        <input v-model="_model" class="spui-Switcher__input" type="checkbox" :id="uniqid" />
        <span v-if="$slots.default && position == 'right'" class="spui-Switcher__text"
            ><slot></slot
        ></span>
        <span class="spui-Switcher__fake">
            <span class="spui-Switcher__btn"></span>
        </span>
        <span v-if="$slots.default && position == 'left'" class="spui-Switcher__text"
            ><slot></slot
        ></span>
    </label>
</template>

<script>
import uuid from "short-uuid";
export default {
    name: "Switcher",
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: "accent",
        },
        position: {
            type: String,
            default: "left",
        },
    },
    data() {
        return {
            base: "spui-Switcher",
            uniqid: null,
        };
    },
    beforeMount() {
        this.uniqid = uuid.generate();
    },
    computed: {
        _model: {
            get() {
                return this.value;
            },
            set(value) {
                if (!this.disabled) {
                    this.$emit("input", value);
                }
            },
        },
        _position() {
            return `${this.base}_${this.position}`;
        },
        _checked() {
            return this.value ? `${this.base}_checked` : null;
        },
        _disabled() {
            return this.disabled ? `${this.base}_disabled` : null;
        },
        _type() {
            return `${this.base}_${this.type}`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./Switcher.scss";
</style>
