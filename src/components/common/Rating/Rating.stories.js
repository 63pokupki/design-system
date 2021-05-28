import '@/components/resources';

import Rating from './Rating.vue';

export default {
    title: 'Общие/Rating',
    component: Rating,
};

export const iconPositionLeft = () => ({
    components: { Rating },
    template: '<Rating icon-position="left">4.9</Rating>',
});

export const iconPositionRight = () => ({
    components: { Rating },
    template: '<Rating icon-position="right">4.9</Rating>',
});
