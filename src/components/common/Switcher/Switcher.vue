<template>
    <label
        :for="uniqid"
        class="spui-Switcher"
        :class="[_position, _checked, _waiting, _disabled, _rounded, _type]"
    >
        <input
            :checked="value"
            @change="$event => onChange($event.target.checked)"
            class="spui-Switcher__input"
            type="checkbox"
            :id="uniqid"
        />
        <span v-if="position == 'right'" class="spui-Switcher__text"><slot></slot></span>
        <span class="spui-Switcher__fake">
            <span class="spui-Switcher__btn"></span>
        </span>
        <span v-if="position == 'left'" class="spui-Switcher__text"><slot></slot></span>
    </label>
</template>

<script>
import uuid from "short-uuid";
export default {
    name: "Switcher",
    props: {
        value: {
            type: Boolean,
            default: true
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
            default: "accent"
        },
        position: {
            type: String,
            default: "left"
        }
    },
    data() {
        return {
            base: "spui-Switcher"
        };
    },
    computed: {
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
@import "./Switcher.scss";
</style>
