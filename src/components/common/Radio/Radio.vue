<template>
    <label
        :for="uniqid"
        class="spui-Radio"
        :class="[_position, _checkedClass, _waiting, _disabled, _rounded, _type, _onlyText, _align]"
    >
        <input
            :id="uniqid"
            v-model="_model"
            :value="val"
            class="spui-Radio__input"
            type="radio"
        >
        <span
            v-if="position == 'right' && $slots.default"
            class="spui-Radio__text"
        >
            <slot name="default" />
        </span>
        <div class="spui-Radio__fake">
            <i
                v-if="_checked"
                class="spui-Radio__icon ds-icon icon-check-in-checkbox"
            />
        </div>
        <span
            v-if="position == 'left' && $slots.default"
            class="spui-Radio__text"
        >
            <slot name="default" />
        </span>
    </label>
</template>

<script>
import uuid from "short-uuid";
import isEqual from "lodash-es/isEqual";

export default {
    name: "Radio",
    props: {
        value: {
            type: [String, Number],
            required: true,
        },
        val: {
            type: [String, Number],
            required: true,
        },
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
            default: "primary",
            validator(value) {
                return ["outline", "primary"].includes(value);
            },
        },
        rounded: {
            type: Boolean,
            default: true,
        },
        position: {
            type: String,
            default: "left",
            validator(value) {
                return ["left", "right"].indexOf(value) !== -1;
            },
        },
    },
    data() {
        return {
            base: "spui-Radio",
            uniqid: null,
        };
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

            return isEqual(model, value);
        },
        _checkedClass() {
            return this._checked ? `${this.base}_checked` : null;
        },
        _align() {
            return this.alignCenter ? `${this.base}_align-center` : null;
        },
        _waiting() {
            return !this._checked && !this.disabled ? `${this.base}_waiting` : null;
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
    beforeMount() {
        this.uniqid = uuid.generate();
    },
};
</script>

<style lang="scss" scoped>
@import "./Radio.scss";
</style>
