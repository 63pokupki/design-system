import Checkbox from "./Checkbox.vue";
import { action } from "@storybook/addon-actions";

export default {
    title: "Компоненты/Checkbox",
    component: Checkbox
};

export const empty = () => ({
    components: { Checkbox },
    data() {
        return {
            checked: false
        }
    },
    template: "<Checkbox v-model='checked'></Checkbox>"
});

export const withTextLeft = () => ({
    components: { Checkbox },
    data() {
        return {
            checked: true
        }
    },
    template: `<Checkbox v-model='checked' :position="'left'">Со значком слева</Checkbox>`
});

export const withTextRight = () => ({
    components: { Checkbox },
    data() {
        return {
            checked: true
        }
    },
    template: `<Checkbox v-model='checked' position="right">Со значком справа</Checkbox>`
});

export const primary = () => ({
    components: { Checkbox },
    data() {
        return {
            checked: true
        }
    },
    template: `<Checkbox v-model='checked' type='primary'>Акцентный при нажатии</Checkbox>`
});

export const rounded = () => ({
    components: { Checkbox },
    data() {
        return {
            checked: true
        }
    },
    template: `<Checkbox v-model='checked' :rounded="true" type='primary'>Скругленный</Checkbox>`
});

export const disabled = () => ({
    components: { Checkbox },
    data() {
        return {
            checked: true
        }
    },
    template: `<Checkbox v-model='checked' :disabled="true">Не интерактивный</Checkbox>`
});
