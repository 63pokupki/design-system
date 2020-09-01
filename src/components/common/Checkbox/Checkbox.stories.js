import Checkbox from "./Checkbox.vue";

export default {
    title: "Общие/Checkbox",
    component: Checkbox
};

export const modelBoolean = () => ({
    components: { Checkbox },
    data() {
        return {
            checked: false
        }
    },
    template: `
    <div>
        <p>Значение: {{checked}}</p>
        <Checkbox v-model='checked'></Checkbox>
    </div>
    `
});

export const modelArray = () => ({
    components: { Checkbox },
    data() {
        return {
            checked: []
        }
    },
    template: `
    <div>
        <p>Значение: {{checked}}</p>
        <Checkbox val="Значение 1" v-model='checked'>Значение 1</Checkbox>
        <Checkbox val="Значение 2" v-model='checked'>Значение 2</Checkbox>
        <Checkbox val="Значение 3" v-model='checked'>Значение 3</Checkbox>
    </div>
    `
});

export const onlyText = () => ({
    components: { Checkbox },
    data() {
        return {
            checked: []
        }
    },
    template: `
    <div>
        <p>Значение: {{checked}}</p>
        <Checkbox val="Значение 1" :onlyText="true" v-model='checked'>Значение 1</Checkbox>
        <Checkbox val="Значение 2" :onlyText="true" v-model='checked'>Значение 2</Checkbox>
        <Checkbox val="Значение 3" :onlyText="true" v-model='checked'>Значение 3</Checkbox>
    </div>
    `
});

export const withTextLeft = () => ({
    components: { Checkbox },
    data() {
        return {
            checked: true
        }
    },
    template: `<Checkbox v-model='checked' position="left">Со значком слева</Checkbox>`
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
