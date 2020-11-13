import "@/components/resources";

import Radio from "./Radio.vue";

export default {
    title: "Общие/Radio",
    component: Radio
};

export const noText = () => ({
    components: { Radio },
    data() {
        return {
            checked: "Значение 1"
        }
    },
    template: `
    <div>
        <p>Значение: {{checked}}</p>
        <Radio val="Значение 1" v-model='checked'></Radio>
        <Radio val="Значение 2" v-model='checked'></Radio>
        <Radio val="Значение 3" v-model='checked'></Radio>
    </div>
    `
});

export const standart = () => ({
    components: { Radio },
    data() {
        return {
            checked: "Значение 1"
        }
    },
    template: `
    <div>
        <p>Значение: {{checked}}</p>
        <Radio val="Значение 1" v-model='checked'>Значение 1</Radio>
        <Radio val="Значение 2" v-model='checked'>Значение 2</Radio>
        <Radio val="Значение 3" v-model='checked'>Значение 3</Radio>
    </div>
    `
});

export const onlyText = () => ({
    components: { Radio },
    data() {
        return {
            checked: "Значение 1"
        }
    },
    template: `
    <div>
        <p>Значение: {{checked}}</p>
        <Radio val="Значение 1" :onlyText="true" v-model='checked'>Значение 1</Radio>
        <Radio val="Значение 2" :onlyText="true" v-model='checked'>Значение 2</Radio>
        <Radio val="Значение 3" :onlyText="true" v-model='checked'>Значение 3</Radio>
    </div>
    `
});

export const withTextLeft = () => ({
    components: { Radio },
    data() {
        return {
            checked: "Значение 1"
        }
    },
    template: `
    <div>
        <p>Значение: {{checked}}</p>
        <Radio val="Значение 1" position="left" v-model='checked'>Значение 1</Radio>
        <Radio val="Значение 2" position="left" v-model='checked'>Значение 2</Radio>
        <Radio val="Значение 3" position="left" v-model='checked'>Значение 3</Radio>
    </div>
    `
});

export const withTextRight = () => ({
    components: { Radio },
    data() {
        return {
            checked: "Значение 1"
        }
    },
    template: `
    <div>
        <p>Значение: {{checked}}</p>
        <Radio val="Значение 1" position="right" v-model='checked'>Значение 1</Radio>
        <Radio val="Значение 2" position="right" v-model='checked'>Значение 2</Radio>
        <Radio val="Значение 3" position="right" v-model='checked'>Значение 3</Radio>
    </div>
    `
});

export const outlined = () => ({
    components: { Radio },
    data() {
        return {
            checked: "Значение 1"
        }
    },
    template: `
    <div>
        <p>Значение: {{checked}}</p>
        <Radio val="Значение 1" type="outlined" v-model='checked'>Значение 1</Radio>
        <Radio val="Значение 2" type="outlined" v-model='checked'>Значение 2</Radio>
        <Radio val="Значение 3" type="outlined" v-model='checked'>Значение 3</Radio>
    </div>
    `
});

export const noRounded = () => ({
    components: { Radio },
    data() {
        return {
            checked: "Значение 1"
        }
    },
    template: `
    <div>
        <p>Значение: {{checked}}</p>
        <Radio val="Значение 1" :rounded="false" v-model='checked'>Значение 1</Radio>
        <Radio val="Значение 2" :rounded="false" v-model='checked'>Значение 2</Radio>
        <Radio val="Значение 3" :rounded="false" v-model='checked'>Значение 3</Radio>
    </div>
    `
});

export const disabled = () => ({
    components: { Radio },
    data() {
        return {
            checked: "Значение 1"
        }
    },
    template: `
    <div>
        <p>Значение: {{checked}}</p>
        <Radio val="Значение 1" disabled v-model='checked'>Значение 1</Radio>
        <Radio val="Значение 2" disabled v-model='checked'>Значение 2</Radio>
        <Radio val="Значение 3" disabled v-model='checked'>Значение 3</Radio>
    </div>
    `
});
