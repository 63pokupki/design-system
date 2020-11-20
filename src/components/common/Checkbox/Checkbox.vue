<template>
    <label
        :for="uniqid"
        class="spui-Checkbox"
        :class="[_position, _checkedClass, _waiting, _disabled, _rounded, _type, _onlyText, _align]"
    >
        <input
            v-model="_model"
            :value="val"
            class="spui-Checkbox__input"
            type="checkbox"
            :id="uniqid"
        />
        <span v-if="position == 'right' && $slots.default" class="spui-Checkbox__text">
            <slot name="default"></slot>
        </span>
        <div class="spui-Checkbox__fake">
            <i v-if="_checked" class="spui-Checkbox__icon ds-icon icon-check-in-checkbox"></i>
        </div>
        <span v-if="position == 'left' && $slots.default" class="spui-Checkbox__text">
            <slot name="default"></slot>
        </span>
    </label>
</template>

<script>
import uuid from "short-uuid";

export default {
    name: "Checkbox",
    props: {
        value: {},
        val: {},
        name: {
            type: String,
            default: "",
        },
        onlyText: {
            type: Boolean,
            default: false,
        },
        alignCenter: {
            type: Boolean,
            default: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: "outline",
            validator (value) {
                return ["outline", "primary"].indexOf(value) !== -1;
            },
        },
        rounded: {
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: "left",
            validator (value) {
                return ["left", "right"].indexOf(value) !== -1;
            },
        },
    },
    data() {
        return {
            base: "spui-Checkbox",
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
        _onlyText() {
            return this.onlyText ? `${this.base}_only-text` : null;
        },
        _position() {
            return `${this.base}_${this.position}`;
        },
        _checked() {
            const model = this._model;
            const value = this.val;

            if (Array.isArray(model)) {
                return model.indexOf(value) !== -1;
            } 
                return model;
            
        },
        _checkedClass() {
            return this._checked ? `${this.base}_checked` : null;
        },
        _align() {
            return this.alignCenter ? `${this.base}_align-center` : null;
        },
        _waiting() {
            return !this._checked && !this.disabled
                ? `${this.base}_waiting`
                : null;
        },
        _disabled() {
            return this.disabled ? `${this.base}_disabled` : null;
        },
        _rounded() {
            return this.rounded ? `${this.base}_rounded` : null;
        },
        _type() {
            return `${this.base}_${this.type}`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./Checkbox.scss";
</style>
