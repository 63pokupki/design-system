<template>
    <label
        class="spui-Checkbox"
        :class="[
            _position,
            _checkedClass,
            _waiting,
            _disabled,
            _rounded,
            _type,
            _onlyText,
            _align,
        ]"
    >
        <input
            v-model="_model"
            :value="val"
            class="spui-Checkbox__input"
            type="checkbox"
        >
        <span
            v-if="position == 'right' && $slots.default"
            class="spui-Checkbox__text"
        >
            <slot name="default" />
        </span>
        <div class="spui-Checkbox__fake">
            <i
                v-if="_checked"
                class="spui-Checkbox__icon ds-icon icon-check-in-checkbox"
            />
        </div>
        <span
            v-if="position == 'left' && $slots.default"
            class="spui-Checkbox__text"
        >
            <slot name="default" />
        </span>
    </label>
</template>

<script>
import isEqual from 'lodash-es/isEqual';

export default {
    name: 'Checkbox',
    props: {
        /** Модель */
        value: {
            type: [Array, Boolean],
            default: false,
        },
        /** Значение */
        val: {
            type: [Array, Object, String, Boolean, Number],
            default: 'Значение не передано',
        },
        /** Отображать только текст без галочки */
        onlyText: {
            type: Boolean,
            default: false,
        },
        /** Вертикальное центрирование галочки и текста */
        alignCenter: {
            type: Boolean,
            default: true,
        },
        /** Неактивное состояние */
        disabled: {
            type: Boolean,
            default: false,
        },
        /** Внешний вид */
        type: {
            type: String,
            default: 'outline',
            validator(value) {
                return ['outline', 'primary'].includes(value);
            },
        },
        /** Круглый вид */
        rounded: {
            type: Boolean,
            default: false,
        },
        /** Позиция галочки относительно текста */
        position: {
            type: String,
            default: 'left',
            validator(value) {
                return ['left', 'right'].includes(value);
            },
        },
    },
    data() {
        return {
            base: 'spui-Checkbox',
        };
    },
    computed: {
        /** Модель */
        _model: {
            get() {
                return this.value;
            },
            set(value) {
                if (!this.disabled) {
                    this.$emit('input', value);
                }
            },
        },
        /** Стилевой класс показа только текста */
        _onlyText() {
            return this.onlyText && `${this.base}_only-text`;
        },
        /** Стилевой класс позиции текста относительно галочки */
        _position() {
            return `${this.base}_${this.position}`;
        },
        /** Состояние - выбран или нет */
        _checked() {
            const model = this._model;
            const value = this.val;

            if (Array.isArray(model)) {
                return model.some((val) => isEqual(val, value));
            }
            return model;
        },
        /** Стилевой класс состояния - выбран или нет */
        _checkedClass() {
            return this._checked && `${this.base}_checked`;
        },
        /** Стилевой класс вертикального центрирования галочки и текста */
        _align() {
            return this.alignCenter && `${this.base}_align-center`;
        },
        /** Стилевой класс состояния - не выбран, не отключен */
        _waiting() {
            return !this._checked && !this.disabled && `${this.base}_waiting`;
        },
        /** Стилевой класс состояния отключен */
        _disabled() {
            return this.disabled && `${this.base}_disabled`;
        },
        /** Стилевой класс круглого вида */
        _rounded() {
            return this.rounded && `${this.base}_rounded`;
        },
        /** Стилевой класс вида */
        _type() {
            return `${this.base}_${this.type}`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import './Checkbox.scss';
</style>
