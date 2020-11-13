import "@/components/resources";

import CounterQuantity from "./CounterQuantity.vue";

export default {
    title: "Общие/CounterQuantity",
    component: CounterQuantity
};

export const standart = () => ({
    components: { CounterQuantity },
    data() {
        return {
            value: 1
        }
    },
    template: `
    <div>
       <CounterQuantity v-model="value"></CounterQuantity>
    </div>
    `
});