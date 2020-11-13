import "@/components/resources";

import DropdownModalWithSelect from "./DropdownModalWithSelect.vue";
import Tooltip from "../Tooltip/Tooltip.vue";

export default {
    title: "Общие/DropdownModalWithSelect",
    component: DropdownModalWithSelect,
};

export const standart = () => ({
    components: { DropdownModalWithSelect, Tooltip },
    data() {
        return {
            value: { key: { label: "популярности" }, value: "0" },
            values: [
                { key: { label: "популярности" }, value: "0" },
                { key: { label: "возрастанию цены" }, value: "0" },
                { key: { label: "убыванию цены" }, value: "0" },
                { key: { label: "новизне" }, value: "0" },
                { key: { label: "названию" }, value: "0" },
                { key: { label: "заполненности рядов" }, value: "0" },
            ],
            label: (value) => value.key.label,
        };
    },
    template: `
            <DropdownModalWithSelect 
            v-model="value"
            :values="values"
            :label="label"
            heading="cортировка по:">
                <template #radio="{val}">
                    {{ label(val) }}
                    <Tooltip style="white-space: nowrap" :forced="true" v-if="val.key.label == 'заполненности рядов'">
                        Доступно для каталогов, <br> которые собираются рядами
                    </Tooltip>
                </template>
            </DropdownModalWithSelect>`,
});

export const objectValues = () => ({
    components: { DropdownModalWithSelect },
    data() {
        return {
            value: { key: { label: "популярности" }, value: "0" },
            values: {
                0: { key: { label: "популярности" }, value: "0" },
                1: { key: { label: "возрастанию цены" }, value: "0" },
                2: { key: { label: "убыванию цены" }, value: "0" },
                3: { key: { label: "новизне" }, value: "0" },
                4: { key: { label: "названию" }, value: "0" },
                5: { key: { label: "заполненности рядов" }, value: "0" },
            },
            label: (value) => value.key.label,
        };
    },
    template: `
            <DropdownModalWithSelect 
            v-model="value"
            :values="values"
            :label="label"
            heading="cортировка по:">
            </DropdownModalWithSelect>`,
});
