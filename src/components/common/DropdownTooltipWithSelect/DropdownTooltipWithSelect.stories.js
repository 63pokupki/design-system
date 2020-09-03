import DropdownTooltipWithSelect from "./DropdownTooltipWithSelect.vue";

export default {
    title: "Общие/DropdownTooltipWithSelect",
    component: DropdownTooltipWithSelect,
};

export const standart = () => ({
    components: { DropdownTooltipWithSelect },
    data() {
        return {
            value: { key: {label: "популярности"}, value: "0" },
            values: [
                { key: {label: "популярности"}, value: "0" },
                { key: {label: "возрастанию цены"}, value: "0" },
                { key: {label: "убыванию цены"}, value: "0" },
                { key: {label: "новизне"}, value: "0" },
                { key: {label: "названию"}, value: "0" },
                { key: {label: "заполненности рядов"}, value: "0" },
            ],
            label: (value) => value.key.label
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