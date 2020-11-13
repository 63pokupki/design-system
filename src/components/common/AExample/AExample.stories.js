import "@/components/resources";

import AExample from "./AExample.vue";

export default {
    title: "Общие/AExample",
    component: AExample
};

export const standart = () => ({
    components: { AExample },
    data() {
        return {
            
        }
    },
    template: `
    <div>
       <AExample></AExample>
    </div>
    `
});