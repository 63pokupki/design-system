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
                v-if="_value"
                class="spui-DropdownTooltipWithSelect__value"
            >{{
                getLabel(_value)
            }}</span>
            <i
                class="spui-DropdownTooltipWithSelect__arrow ds-icon icon-rectangle"
            />
        </span>

        <Tooltip
            v-if="open"
            :forced="true"
        >
            <div
                v-for="(val, i) in values"
                :key="i"
                class="spui-DropdownTooltipWithSelect__val"
                @click="() => onSelectValue(val)"
            >
                {{ getLabel(val) }}
            </div>
        </Tooltip>
    </span>
</template>

<script>
import { clickOutside } from '@/directives';
import { capitalize } from '@/helpers';
import Tooltip from '../Tooltip/Tooltip.vue';

export default {
    name: 'DropdownTooltipWithSelect',
    components: {
        Tooltip,
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
            type: Object,
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
    },
    data() {
        return {
            base: 'spui-DropdownTooltipWithSelect',
            open: false,
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
        },
        getLabel(value) {
            if (!value || !this.label || typeof this.label !== 'function') return null;

            return this.label(value);
        },
    },
};
</script>

<style lang="scss" scoped>
@import './DropdownTooltipWithSelect.scss';
</style>
