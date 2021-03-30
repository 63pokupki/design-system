import '@/components/resources';

import InputSearchWithHints from './InputSearchWithHints.vue';

export default {
    title: 'Специфичные/InputSearchWithHints',
    component: InputSearchWithHints,
};

export const standart = () => ({
    components: { InputSearchWithHints },
    data() {
        return {
            text: 'платье',
            isHintsOpen: false,
            isCategoryOpen: false,
            hints: [
                {
                    id: 104,
                    label: 'Красное платье',
                    count: 2345,
                },
                {
                    id: 105,
                    label:
                        'Вечернее платье на выпускной и очень длинное название подсказки',
                    count: 345830,
                },
                {
                    id: 177,
                    label: 'Свадебное платье',
                    count: 7462089674,
                },
                {
                    id: 178,
                    label: 'Летнее платье',
                    count: 3,
                },
            ],
            brands: [
                { id: 364613, brand_name: 'Платья Ксении Верд' },
                { id: 147416, brand_name: 'Платина' },
                { id: 347930, brand_name: 'Платиновая лаборатория' },
            ],
            fnHintLabel: (hint) => hint.label,
            fnHintCount: (hint) => hint.count,
            fnBrandLabel: (brand) => brand.brand_name,
            fnBrandUniqKey: (brand) => brand.id,
        };
    },
    methods: {
        onClickHint(hint) {
            this.text = this.fnBrandLabel(hint);
        },
        onClickBrand(brand) {
            this.text = this.fnHintLabel(brand);
        },
        onHintsOpenChange(value) {
            this.isHintsOpen = value;
        },
        onCategoryOpenChange(value) {
            this.isCategoryOpen = value;
        },
        onInputByItems() {
            console.log('Запрос к подсказкам для автодополнения');
        },
        onSearch() {
            console.log('Отправка запроса');
        },
    },
    template: `<InputSearchWithHints 
        v-model="text" 
        :hints="hints"
        :is-hints-open="isHintsOpen" 
        :is-category-open="isCategoryOpen"
        :fn-hint-label="fnHintLabel"
        :fn-hint-count="fnHintCount"
        :fn-brand-label="fnBrandLabel"
        :fn-brand-uniq-key="fnBrandUniqKey"
        @hint-click="onClickHint" 
        @brand-click="onClickHint" 
        @hints-open-change="onHintsOpenChange" 
        @category-open-change="onCategoryOpenChange" 
        @input-by-items="onInputByItems" 
        @search="onSearch"></InputSearchWithHints>`,
});
