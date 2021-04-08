import '@/components/resources';

import DropdownTooltipWithSelect from './DropdownTooltipWithSelect.vue';

export default {
    title: 'Общие/DropdownTooltipWithSelect',
    component: DropdownTooltipWithSelect,
};

export const standart = () => ({
    components: { DropdownTooltipWithSelect },
    data() {
        return {
            value: { key: { label: 'популярности' }, value: '0' },
            values: [
                { key: { label: 'популярности' }, value: '0' },
                { key: { label: 'возрастанию цены' }, value: '0' },
                { key: { label: 'убыванию цены' }, value: '0' },
                { key: { label: 'новизне' }, value: '0' },
                { key: { label: 'названию' }, value: '0' },
                { key: { label: 'заполненности рядов' }, value: '0' },
            ],
            label: (value) => value.key.label,
        };
    },
    methods: {
        onApplyChoise(value) {
            console.log(value);
        },
    },
    template: `
            <DropdownTooltipWithSelect 
            v-model="value" 
            :values="values"
            :label="label"
            heading="cортировка по"
            @onApplyChoise="onApplyChoise">
            </DropdownTooltipWithSelect>`,
});

export const multipleChoise = () => ({
    components: { DropdownTooltipWithSelect },
    data() {
        return {
            value: [{ key: { label: 'популярности' }, value: '0' }],
            values: [
                { key: { label: 'популярности' }, value: '0' },
                { key: { label: 'возрастанию цены' }, value: '0' },
                { key: { label: 'убыванию цены' }, value: '0' },
                { key: { label: 'новизне' }, value: '0' },
                { key: { label: 'названию' }, value: '0' },
                { key: { label: 'заполненности рядов' }, value: '0' },
            ],
            label: (value) => value.key.label,
        };
    },
    methods: {
        onApplyMultipleChoise(values) {
            console.log(values);
        },
    },
    template: `
            <DropdownTooltipWithSelect 
            v-model="value" 
            :multiple="true"
            :values="values"
            :label="label"
            @onApplyMultipleChoise="onApplyMultipleChoise"
            heading="фильтр по">
            </DropdownTooltipWithSelect>`,
});

export const objectValues = () => ({
    components: { DropdownTooltipWithSelect },
    data() {
        return {
            value: { key: { label: 'популярности' }, value: '0' },
            values: {
                0: { key: { label: 'популярности' }, value: '0' },
                1: { key: { label: 'возрастанию цены' }, value: '0' },
                2: { key: { label: 'убыванию цены' }, value: '0' },
                3: { key: { label: 'новизне' }, value: '0' },
                4: { key: { label: 'названию' }, value: '0' },
                5: { key: { label: 'заполненности рядов' }, value: '0' },
            },
            label: (value) => value.key.label,
        };
    },
    template: `
            <DropdownTooltipWithSelect 
            v-model="value" 
            :values="values"
            :label="label"
            heading="cортировка по">
            </DropdownTooltipWithSelect>`,
});
