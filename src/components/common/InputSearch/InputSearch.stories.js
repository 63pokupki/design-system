import '@/components/resources';

import InputSearch from './InputSearch.vue';

export default {
    title: 'Общие/InputSearch',
    component: InputSearch,
};

export const standart = () => ({
    components: { InputSearch },
    data() {
        return {
            value: '',
            placeholder: 'Поиск по параметрам',
        };
    },
    methods: {
        /* eslint no-alert: "off" */
        onSearch(value) {
            alert(value);
        },
    },
    template: `
    <div>
       <InputSearch v-model="value" @onSearch="onSearch" :placeholder="placeholder"></InputSearch>
    </div>
    `,
});

export const sizeLarge = () => ({
    components: { InputSearch },
    data() {
        return {
            value: '',
            placeholder: 'Поиск по параметрам',
        };
    },
    methods: {
        /* eslint no-alert: "off" */
        onSearch(value) {
            alert(value);
        },
        /* eslint no-alert: "off" */
        onClear() {
            alert('Очистка');
        },
    },
    template: `
    <div>
       <InputSearch :is-clear-btn-visible="true" size="lg" v-model="value" @on-search="onSearch" @on-clear="onClear" :placeholder="placeholder"></InputSearch>
    </div>
    `,
});

export const noSearchBtn = () => ({
    components: { InputSearch },
    data() {
        return {
            value: '',
            placeholder: 'Поиск по параметрам',
            isSearchBtnVisible: false,
        };
    },
    methods: {
        /* eslint no-alert: "off" */
        onSearch(value) {
            alert(value);
        },
    },
    template: `
    <div>
       <InputSearch v-model="value" @onSearch="onSearch" :placeholder="placeholder" :isSearchBtnVisible="isSearchBtnVisible"></InputSearch>
    </div>
    `,
});
