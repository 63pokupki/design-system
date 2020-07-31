import Button from "./Button.vue";
import { action } from "@storybook/addon-actions";

export default {
    title: "Компоненты/Button",
    component: Button
};

export const empty = () => ({
    components: { Button },
    methods: {
        onClick: action("click")
    },
    template: "<Button></Button>"
});

export const primary = () => ({
    components: { Button },
    methods: {
        onClick: action("click")
    },
    template: "<Button type='primary'>Кнопка стандартная</Button>"
});

export const outlined = () => ({
    components: { Button },
    methods: {
        onClick: action("click")
    },
    template: "<Button type='outlined'>Кнопка outline</Button>"
});

export const loading = () => ({
    components: { Button },
    methods: {
        onClick: action("click")
    },
    template: "<Button :is-loading='true'>Кнопка в состоянии ожидания</Button>"
});

export const disabled = () => ({
    components: { Button },
    methods: {
        onClick: action("click")
    },
    template: "<Button :is-disabled='true'>Кнопка в неактивном состоянии</Button>"
});

export const block = () => ({
    components: { Button },
    methods: {
        onClick: action("click")
    },
    template: "<Button :block='true'>Кнопка занимает всю доступную ширину</Button>"
});

export const withIcon = () => ({
    components: { Button },
    methods: {
        onClick: action("click")
    },
    render: (h) => <Button icon={{name: 'icon-cart', pos: 'right'}}>Кнопка с иконкой</Button>
});
