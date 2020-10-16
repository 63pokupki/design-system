import BadgeCategoryTag from "./BadgeCategoryTag.vue";

export default {
    title: "Специфичные/BadgeCategoryTag",
    component: BadgeCategoryTag,
};

export const sm = () => ({
    components: { BadgeCategoryTag },
    methods: {
        onClickHandler() {
            console.log("Click");
        },
    },
    template: `
    <BadgeCategoryTag @click="onClickHandler">
    #распродажа
    </BadgeCategoryTag>`,
});

export const lg = () => ({
    components: { BadgeCategoryTag },
    methods: {
        onClickHandler() {
            console.log("Click");
        },
    },
    template: `
    <BadgeCategoryTag size="lg" @click="onClickHandler">
    #распродажа
    </BadgeCategoryTag>`,
});

export const active = () => ({
    components: { BadgeCategoryTag },
    methods: {
        onClickHandler() {
            console.log("Click");
        },
    },
    template: `
    <BadgeCategoryTag :active="true" @click="onClickHandler">
    #распродажа
    </BadgeCategoryTag>`,
});

export const withCustomClass = () => ({
    components: { BadgeCategoryTag },
    methods: {
        onClickHandler() {
            console.log("Click");
        },
    },
    template: `
    <BadgeCategoryTag class="custom-class" @click="onClickHandler">
    #распродажа
    </BadgeCategoryTag>`,
});
