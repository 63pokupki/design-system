import "@/components/resources";

import InputSearchWithHints from "./InputSearchWithHints.vue";

export default {
    title: "Специфичные/InputSearchWithHints",
    component: InputSearchWithHints,
};

export const standart = () => ({
    components: { InputSearchWithHints },
    data() {
        return {
            text: "платье",
            isHintsOpen: false,
            isCategoryOpen: false,
            hints: [
                {
                    label: "Красное платье",
                    count: 2345,
                },
                {
                    label: "Вечернее платье на выпускной и очень длинное название подсказки",
                    count: 345830,
                },
                {
                    label: "Свадебное платье",
                    count: 7462089674,
                },
                {
                    label: "Летнее платье",
                    count: 3,
                },
            ],
            fnHintLabel: (hint) => hint.label,
            fnHintCount: (hint) => hint.count,
        };
    },
    methods: {
        onClickHint(hint) {
            this.text = this.fnHintLabel(hint);
        },
        onHintsOpenChange(value) {
            this.isHintsOpen = value;
        },
        onCategoryOpenChange(value) {
            this.isCategoryOpen = value;
        },
        onInputByItems() {
            console.log("Запрос к подсказкам для автодополнения");
        },
        onSearch() {
            console.log("Отправка запроса");
        }
    },
    template: `<InputSearchWithHints v-model="text" :hints="hints" :is-hints-open="isHintsOpen" :is-category-open="isCategoryOpen" @hint-click="onClickHint" @hints-open-change="onHintsOpenChange" @category-open-change="onCategoryOpenChange" @input-by-items="onInputByItems" @search="onSearch"></InputSearchWithHints>`,
});
