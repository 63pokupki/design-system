import '@/components/resources';

import Input from './Input.vue';

export default {
    title: 'Общие/Input',
    component: Input,
};

export const text = () => ({
    components: { Input },
    data() {
        return {
            value: '',
        };
    },
    methods: {
        onEnter(value) {
            console.log('onEnter', value);
        },
    },
    template: `<Input 
                    v-model="value" 
                    @enter="onEnter"
                    type="text"
                    label="Имя пользователя">
                </Input>`,
});

export const isRequired = () => ({
    components: { Input },
    data() {
        return {
            value: '',
        };
    },
    methods: {
        onEnter(value) {
            console.log('onEnter', value);
        },
    },
    template: `<Input 
                    v-model="value" 
                    @enter="onEnter"
                    type="text"
                    is-required
                    label="Имя пользователя">
                </Input>`,
});

export const withoutLabel = () => ({
    components: { Input },
    data() {
        return {
            value: '',
        };
    },
    methods: {
        onEnter(value) {
            console.log('onEnter', value);
        },
    },
    template: `<Input 
                    v-model="value" 
                    @enter="onEnter"
                    type="text">
                </Input>`,
});

export const disabled = () => ({
    components: { Input },
    data() {
        return {
            value: 'Нельзя изменить',
        };
    },
    methods: {
        onEnter(value) {
            console.log('onEnter', value);
        },
    },
    template: `<Input 
                    v-model="value" 
                    @enter="onEnter"
                    type="text"
                    is-disabled
                    label="Имя пользователя">
                </Input>`,
});

export const withFeedbackHelp = () => ({
    components: { Input },
    data() {
        return {
            value: '',
        };
    },
    methods: {
        onEnter(value) {
            console.log('onEnter', value);
        },
    },
    template: `<Input 
                    v-model="value" 
                    @enter="onEnter"
                    type="text"
                    feedback-help="От 3 до 10 символов"
                    label="Имя пользователя">
                </Input>`,
});

export const withFeedbackError = () => ({
    components: { Input },
    data() {
        return {
            value: '',
        };
    },
    methods: {
        onEnter(value) {
            console.log('onEnter', value);
        },
    },
    template: `<Input 
                    v-model="value" 
                    @enter="onEnter"
                    type="text"
                    is-error
                    feedback-error="Неправильное имя пользователя"
                    label="Имя пользователя">
                </Input>`,
});

export const withFeedbackValid = () => ({
    components: { Input },
    data() {
        return {
            value: '',
        };
    },
    methods: {
        onEnter(value) {
            console.log('onEnter', value);
        },
    },
    template: `<Input 
                    v-model="value" 
                    @enter="onEnter"
                    type="text"
                    is-valid
                    feedback-valid="Данные правильные"
                    label="Имя пользователя">
                </Input>`,
});

export const withFeedbackAllToggle = () => ({
    components: { Input },
    data() {
        return {
            value: '',
            isError: false,
            isValid: false,
        };
    },
    methods: {
        onEnter(value) {
            console.log('onEnter', value);
        },
        onDefault() {
            this.isError = false;
            this.isValid = false;
        },
        onError() {
            this.isError = true;
            this.isValid = false;
        },
        onValid() {
            this.isError = false;
            this.isValid = true;
        },
    },
    template: `<div>
        <button @click="onDefault">Обычный</button>
        <button @click="onError">Невалидный</button>
        <button @click="onValid">Валидный</button>
        <br/>
        <br/>
        <Input 
                    v-model="value" 
                    @enter="onEnter"
                    type="text"
                    :is-error="isError"
                    :is-valid="isValid"
                    feedback-help="От 3 до 10 символов"
                    feedback-error="Неправильное имя пользователя"
                    feedback-valid="Данные правильные"
                    label="Имя пользователя">
                </Input></div>`,
});

export const phoneWithMask = () => ({
    components: { Input },
    data() {
        return {
            value: '',
        };
    },
    methods: {
        onEnter(value) {
            console.log('onEnter', value);
        },
    },
    template: `<Input 
                    v-model="value" 
                    @enter="onEnter"
                    type="tel"
                    placeholder="+7 (000) 000-00-00"
                    mask="+7 (###) ###-##-##"
                    label="Номер телефона">
                </Input>`,
});

export const password = () => ({
    components: { Input },
    data() {
        return {
            value: '',
            isPasswordVisible: false,
        };
    },
    methods: {
        onEnter(value) {
            console.log('onEnter', value);
        },
        onPasswordVisibleChange(value) {
            console.log('onPasswordVisibleChange', value);
            this.isPasswordVisible = value;
        },
    },
    template: `<Input 
                    v-model="value" 
                    @enter="onEnter"
                    @password-visible-change="onPasswordVisibleChange"
                    :password-is-visible="isPasswordVisible"
                    type="password"
                    label="Пароль">
                </Input>`,
});

export const passwordRepeat = () => ({
    components: { Input },
    data() {
        return {
            value: '',
            isPasswordVisible: false,
        };
    },
    methods: {
        onEnter(value) {
            console.log('onEnter', value);
        },
        onPasswordVisibleChange(value) {
            console.log('onPasswordVisibleChange', value);
            this.isPasswordVisible = value;
        },
    },
    template: `<Input 
                    v-model="value" 
                    @enter="onEnter"
                    @password-visible-change="onPasswordVisibleChange"
                    :password-is-visible="isPasswordVisible"
                    type="password"
                    label="Повторите пароль">
                </Input>`,
});

export const customMask = () => ({
    components: { Input },
    data() {
        return {
            value: '',
        };
    },
    methods: {
        onEnter(value) {
            console.log('onEnter', value);
        },
    },
    template: `<Input 
                    v-model="value" 
                    @enter="onEnter"
                    type="text"
                    placeholder="dd-mm-yyyy"
                    mask="##/##/####"
                    label="Дата">
                </Input>`,
});

export const email = () => ({
    components: { Input },
    data() {
        return {
            value: '',
        };
    },
    methods: {
        onEnter(value) {
            console.log('onEnter', value);
        },
    },
    template: `<Input 
                    v-model="value" 
                    @enter="onEnter"
                    type="email"
                    label="Email">
                </Input>`,
});
