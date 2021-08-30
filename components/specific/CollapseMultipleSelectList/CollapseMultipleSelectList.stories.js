import '@/components/resources';

import CollapseMultipleSelectList from './CollapseMultipleSelectList.vue';

export default {
    title: 'Специфичные/CollapseMultipleSelectList',
    component: CollapseMultipleSelectList,
};

export const exampleSize = () => ({
    components: { CollapseMultipleSelectList },
    data() {
        return {
            open: true,
            listOpen: false,
            showTooltip: false,
            label: (value) => value.label,
            values: [
                { label: '10', value: 10 },
                { label: '20', value: 20 },
                { label: '30', value: 30 },
                { label: '40', value: 40 },
                { label: '50', value: 50 },
                { label: '60', value: 60 },
                { label: '70', value: 70 },
                { label: '80', value: 80 },
                { label: '90', value: 90 },
                { label: '100', value: 100 },
                { label: '11', value: 11 },
                { label: '21', value: 21 },
                { label: '31', value: 31 },
                { label: '41', value: 41 },
                { label: '51', value: 51 },
                { label: '61', value: 61 },
                { label: '71', value: 71 },
                { label: '81', value: 81 },
                { label: '91', value: 91 },
                { label: '101', value: 101 },
            ],
            value: [{ label: '10', value: 10 }],
        };
    },
    methods: {
        collapseHandler(e) {
            this.open = e;
        },
        changeExpandHandler(e) {
            this.listOpen = e;
        },
        tooltipClickHandler() {
            this.showTooltip = false;
            console.log('Tooltip click!');
        },
        tooltipStateChangeHandler(e) {
            this.showTooltip = e;
        },
        onSelectAll() {
            this.value = this.values;
        },
    },
    template: `<div>
            <CollapseMultipleSelectList
                v-model="value"
                :heading="'Размер'"
                :open="open"
                :listOpen="listOpen"
                :values="values"
                :label="label"
                :tooltip="showTooltip"
                @collapse="collapseHandler"
                @changeListOpen="changeExpandHandler"
                @tooltipStateChange="tooltipStateChangeHandler"
                @tooltipClick="tooltipClickHandler"
                @onSelectAll="onSelectAll"
            />
    </div>`,
});

export const exampleColor = () => ({
    components: { CollapseMultipleSelectList },
    data() {
        return {
            open: true,
            listOpen: false,
            showTooltip: false,
            label: (value) => value.label,
            values: [
                { label: 'красный', value: 0 },
                { label: 'синий', value: 0 },
                { label: 'серобурмалиновый', value: 0 },
                { label: 'желтый', value: 0 },
                { label: 'лиловый', value: 0 },
                { label: 'серый', value: 0 },
                { label: 'бежевый (снежинка)', value: 0 },
                { label: '*', value: 0 },
                { label: 'волна', value: 0 },
                { label: 'голубой', value: 0 },
                { label: 'черный/клетка', value: 0 },
                { label: 'черный/линейка/мелкая линейка', value: 0 },
            ],
            value: [{ label: 'красный', value: 0 }],
        };
    },
    methods: {
        collapseHandler(e) {
            this.open = e;
        },
        changeExpandHandler(e) {
            this.listOpen = e;
        },
        tooltipClickHandler() {
            this.showTooltip = false;
            console.log('Tooltip click!');
        },
        tooltipStateChangeHandler(e) {
            this.showTooltip = e;
        },
        onSelectAll() {
            this.value = this.values;
        },
    },
    template: `<div>
            <CollapseMultipleSelectList
                v-model="value"
                :heading="'Цвет'"
                :open="open"
                :label="label"
                :listOpen="listOpen"
                :values="values"
                :tooltip="showTooltip"
                @tooltipStateChange="tooltipStateChangeHandler"
                @collapse="collapseHandler"
                @changeListOpen="changeExpandHandler"
                @tooltipClick="tooltipClickHandler"
                @onSelectAll="onSelectAll"
            />
    </div>`,
});

export const withSearchInput = () => ({
    components: { CollapseMultipleSelectList },
    data() {
        return {
            open: true,
            listOpen: false,
            showTooltip: false,
            label: (value) => value.label,
            values: [
                { label: 'красный', value: 0 },
                { label: 'синий', value: 0 },
                { label: 'серобурмалиновый', value: 0 },
                { label: 'желтый', value: 0 },
                { label: 'лиловый', value: 0 },
                { label: 'серый', value: 0 },
                { label: 'бежевый (снежинка)', value: 0 },
                { label: '*', value: 0 },
                { label: 'волна', value: 0 },
                { label: 'голубой', value: 0 },
                { label: 'черный/клетка', value: 0 },
                { label: 'черный/линейка/мелкая линейка', value: 0 },
            ],
            value: [{ label: 'красный', value: 0 }],
            displaySearchInput: true,
            inputSearchValue: '',
        };
    },
    methods: {
        collapseHandler(e) {
            this.open = e;
        },
        changeExpandHandler(e) {
            this.listOpen = e;
        },
        tooltipClickHandler() {
            this.showTooltip = false;
            console.log('Tooltip click!');
        },
        tooltipStateChangeHandler(e) {
            this.showTooltip = e;
        },
        onInputSearchValue(value) {
            this.inputSearchValue = value;
        },
        /* eslint no-alert: "off" */
        onSearch(value) {
            alert(`Search: ${value}`);
        },
        onSelectAll() {
            this.value = this.values;
        },
    },
    template: `<div>
            <CollapseMultipleSelectList
                style="max-width: 286px"
                v-model="value"
                :heading="'Цвет'"
                :open="open"
                :label="label"
                :listOpen="listOpen"
                :values="values"
                :tooltip="showTooltip"
                :displaySearchInput="displaySearchInput"
                :inputSearchValue="inputSearchValue"
                @inputSearchValue="onInputSearchValue"
                @onSearch="onSearch"
                @tooltipStateChange="tooltipStateChangeHandler"
                @collapse="collapseHandler"
                @changeListOpen="changeExpandHandler"
                @tooltipClick="tooltipClickHandler"
                @onSelectAll="onSelectAll"
            />
    </div>`,
});
