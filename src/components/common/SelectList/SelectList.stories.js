import SelectList from "./SelectList.vue";
import { action } from "@storybook/addon-actions";

const elements = [
    { label: 1 },
    { label: 27 },
    { label: 184 },
    { label: 3200 },
    { label: "Фиолетовый" },
    { label: "Серобурмалиновый" },
    { label: "Синий" },
    { label: "Большая неразрывная строка на несколько слов" },
    { label: "Бра" },
]

export default {
    title: "Общие/SelectList",
    component: SelectList,
};

export const one = () => ({
    components: { SelectList },
    data() {
        return {
            value: { label: 1 },
            elements
        };
    },
    template: "<SelectList :list='elements' v-model='value'></SelectList>",
});

export const many = () => ({
    components: { SelectList },
    data() {
        return {
            value: [{ label: 1 }],
            elements
        };
    },
    template:
        "<SelectList :list='elements' v-model='value' :one='false'></SelectList>",
});
