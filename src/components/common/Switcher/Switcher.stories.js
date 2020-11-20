import "@/components/resources";

import Switcher from "./Switcher.vue";

export default {
    title: "Общие/Switcher",
    component: Switcher,
};

export const accent = () => ({
    components: { Switcher },
    data() {
        return {
            checked: false,
        };
    },
    template: "<Switcher v-model='checked' type='accent'></Switcher>",
});

export const accentDisabled = () => ({
    components: { Switcher },
    data() {
        return {
            checked: false,
        };
    },
    template: "<Switcher v-model='checked' type='accent' disabled></Switcher>",
});

export const outline = () => ({
    components: { Switcher },
    data() {
        return {
            checked: false,
        };
    },
    template: "<Switcher v-model='checked' type='outline'></Switcher>",
});

export const outlineDisabled = () => ({
    components: { Switcher },
    data() {
        return {
            checked: false,
        };
    },
    template: "<Switcher v-model='checked' type='outline' disabled></Switcher>",
});

export const left = () => ({
    components: { Switcher },
    data() {
        return {
            checked: false,
        };
    },
    template: "<Switcher v-model='checked' position='left'>Switcher слева</Switcher>",
});

export const right = () => ({
    components: { Switcher },
    data() {
        return {
            checked: false,
        };
    },
    template: "<Switcher v-model='checked' position='right'>Switcher справа</Switcher>",
});
