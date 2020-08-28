<template>
    <label
        :for="uniqid"
        class="spui-Checkbox"
        :class="[_position, _checked, _waiting, _disabled, _rounded, _type]"
    >
        <input
            :checked="value"
            @change="$event => onChange($event.target.checked)"
            class="spui-Checkbox__input"
            type="checkbox"
            :id="uniqid"
        />
        <span v-if="position == 'right'" class="spui-Checkbox__text"><slot></slot></span>
        <span class="spui-Checkbox__fake">
            <i v-if="value" class="spui-Checkbox__icon ds-icon icon-check-in"></i>
        </span>
        <span v-if="position == 'left'" class="spui-Checkbox__text"><slot></slot></span>
    </label>
</template>

<script>
import uuid from "short-uuid";
export default {
    name: "Checkbox",
    props: {
        value: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        uniqid: {
            type: String,
            default: uuid.generate()
        },
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: "outline"
        },
        rounded: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: "left"
        }
    },
    data() {
        return {
            base: "spui-Checkbox"
        };
    },
    computed: {
        _position() {
            return `${this.base}_${this.position}`;
        },
        _checked() {
            return this.value ? `${this.base}_checked` : null;
        },
        _waiting() {
            return !this.value && !this.disabled ? `${this.base}_waiting` : null;
        },
        _disabled() {
            return this.disabled ? `${this.base}_disabled` : null;
        },
        _rounded() {
            return this.rounded ? `${this.base}_rounded` : null;
        },
        _type() {
            return `${this.base}_${this.type}`;
        }
    },
    methods: {
        onChange(value) {
            if (!this.disabled) {
                this.$emit("input", value);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "./Checkbox.scss";
</style>
