import Tooltip from "./Tooltip.vue";

const blockStyles = `margin: 100px auto 0; height: 100px; width: 100px; background: grey;`

export default {
    title: "Компоненты/Tooltip",
    component: Tooltip
};

export const empty = () => ({
    components: { Tooltip },
    template: `<div style="${blockStyles}"><Tooltip>Текст подсказки</Tooltip></div>`
});

export const forced = () => ({
    components: { Tooltip },
    template: `<div style="${blockStyles}"><Tooltip forced>Текст подсказки</Tooltip></div>`
});

export const accent = () => ({
    components: { Tooltip },
    template: `<div style="${blockStyles}"><Tooltip type="accent">Текст подсказки</Tooltip></div>`
});

export const textCentered = () => ({
    components: { Tooltip },
    template: `<div style="${blockStyles}"><Tooltip type="accent" centered>Текст подсказки</Tooltip></div>`
});

export const positionLeft = () => ({
    components: { Tooltip },
    template: `<div style="${blockStyles}"><Tooltip position="left">Текст подсказки</Tooltip></div>`
});

export const positionRight = () => ({
    components: { Tooltip },
    template: `<div style="${blockStyles}"><Tooltip position="right">Текст подсказки</Tooltip></div>`
});

export const positionTop = () => ({
    components: { Tooltip },
    template: `<div style="${blockStyles}"><Tooltip position="top">Текст подсказки</Tooltip></div>`
});