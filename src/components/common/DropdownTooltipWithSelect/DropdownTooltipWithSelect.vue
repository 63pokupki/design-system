<template>
    <span
        v-click-outside="() => setStateopen(false)"
        class="spui-DropdownTooltipWithSelect"
    >
        <span
            class="spui-DropdownTooltipWithSelect__wrapper"
            @click="() => setStateopen(!open)"
        >
            <span
                class="spui-DropdownTooltipWithSelect__heading"
            >{{ _heading }}:</span>
            <span
                v-if="_value && !multiple"
                class="spui-DropdownTooltipWithSelect__value"
            >{{ getLabel(_value) }}</span>
            <span
                v-if="_value && multiple"
                class="spui-DropdownTooltipWithSelect__value"
            >{{ getLabelForMultiple(_value) }}</span>
            <i
                class="spui-DropdownTooltipWithSelect__arrow ds-icon icon-rectangle"
            />
        </span>

        <Tooltip
            v-if="open"
            :forced="true"
        >
            <template v-if="!multiple">
                <div
                    v-for="(val, i) in values"
                    :key="i"
                    class="spui-DropdownTooltipWithSelect__val"
                    @click="() => onSelectValue(val)"
                >
                    {{ getLabel(val) }}
                </div>
            </template>
            <template v-if="multiple">
                <Checkbox
                    v-for="(val, i) in values"
                    :key="i"
                    v-model="_value"
                    :val="val"
                    type="primary"
                    class="spui-DropdownTooltipWithSelect__val spui-DropdownTooltipWithSelect__multiple"
                >{{ getLabel(val) }}</Checkbox>
                <Button
                    class="spui-DropdownTooltipWithSelect__apply"
                    block
                    @click="onApplyMultipleChoise"
                >Применить</Button>
            </template>
        </Tooltip>
    </span>
</template>

<script>
import { clickOutside } from '@/directives';
import { capitalize } from '@/helpers';
import Tooltip from '../Tooltip/Tooltip.vue';
import Checkbox from '../Checkbox/Checkbox.vue';
import Button from '../Button/Button.vue';

export default {
    name: 'DropdownTooltipWithSelect',
    components: {
        Tooltip,
        Checkbox,
        Button,
    },
    directives: {
        'click-outside': clickOutside,
    },
    props: {
        heading: {
            type: String,
            required: true,
            default: 'Название не передано',
        },
        value: {
            type: [Object, Array],
            required: true,
        },
        label: {
            type: Function,
            required: true,
        },
        values: {
            type: [Array, Object],
            required: true,
            default: () => [],
        },
        multiple: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            base: 'spui-DropdownTooltipWithSelect',
            open: false,
            multipleValue: [],
        };
    },
    computed: {
        _heading: {
            get() {
                if (this.heading) {
                    return capitalize(this.heading);
                }

                return null;
            },
        },
        _value: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            },
        },
    },
    methods: {
        setStateopen(value) {
            this.open = value;
        },
        onSelectValue(value) {
            this._value = value;
            this.open = false;
            this.$emit('onApplyChoise', value);
        },
        getLabel(value) {
            if (!value || !this.label || typeof this.label !== 'function') return null;
            return this.label(value);
        },
        getLabelForMultiple(values) {
            return values.map((value) => this.getLabel(value)).join(', ');
        },
        onApplyMultipleChoise() {
            this.$emit('onApplyMultipleChoise', this._value);
        },
    },
};
</script>

<style lang="scss" scoped>
@import './DropdownTooltipWithSelect.scss';
</style>
