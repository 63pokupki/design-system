import "@/components/resources";

import PriceDoubleColor from "./PriceDoubleColor.vue";

export default {
    title: "Общие/PriceDoubleColor",
    component: PriceDoubleColor,
};

export const cartPrice = () => ({
    components: { PriceDoubleColor },
    data() {
        return {
            
        }
    },
    template: `
    <div>
       <PriceDoubleColor></PriceDoubleColor>
    </div>
    `

});
