import '@/components/resources';

import ScrollIntoElementButtons from './ScrollIntoElementButtons.vue';

export default {
    title: 'Общие/ScrollIntoElementButtons',
    component: ScrollIntoElementButtons,
};

export const standart = () => ({
    components: { ScrollIntoElementButtons },
    data() {
        return {};
    },
    template: `
    <div>
        <div style="height: 2000px; background: green;"></div>
       <ScrollIntoElementButtons target-up-id="root" target-up-block-position="start" target-down-block-position="end" target-down-id="root" ></ScrollIntoElementButtons>
    </div>
    `,
});
