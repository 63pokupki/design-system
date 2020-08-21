import RangePrice from "./RangePrice.vue";

export default {
    title: "Компоненты/RangePrice",
    component: RangePrice
};

export const primary = () => ({
    components: { RangePrice },
    data() {
        return {
            min: 0,
            max: 1000,
            value: [250, 750]
        };
    },
    template: "<RangePrice v-model='value' :min='min' :max='max'></RangePrice>"
});
