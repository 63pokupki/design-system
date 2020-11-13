import "@/components/resources";

import RadioSelectList from "./RadioSelectList.vue";

export default {
    title: "Общие/RadioSelectList",
    component: RadioSelectList,
};

export const standart = () => ({
    components: { RadioSelectList },
    data() {
        return {
            value: 30,
            values: [30, 60],
        };
    },
    methods: {
        onInput(value) {
            this.value = value;
        },
    },
    template: `
    <div>
       <RadioSelectList :value="value" text="Сортировка по:" :values="values" @input="onInput"></RadioSelectList>
    </div>
    `,
});

export const noText = () => ({
    components: { RadioSelectList },
    data() {
        return {
            value: 30,
            values: [30, 60]
        };
    },
    methods: {
        onInput(value) {
            this.value = value;
        },
    },
    template: `
    <div>
       <RadioSelectList :value="value" :values="values" @input="onInput"></RadioSelectList>
    </div>
    `,
});

export const custom = () => ({
    components: { RadioSelectList },
    data() {
        return {
            value: 30,
            values: [30, 60, 90, 120],
            text: "Другой текст",
            position: "right",
        };
    },
    methods: {
        onInput(value) {
            this.value = value;
        },
    },

    template: `
    <div>
       <RadioSelectList :value="value" :values="values" :text="text" :position="position" @input="onInput"></RadioSelectList>
    </div>
    `,
});
