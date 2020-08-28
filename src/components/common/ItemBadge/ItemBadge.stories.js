import ItemBadge from "./ItemBadge.vue";

export default {
    title: "Общие/ItemBadge",
    component: ItemBadge
};

export const primary = () => ({
    components: { ItemBadge },
    template: "<ItemBadge color='primary'>любой текст</ItemBadge>"
});

export const accent = () => ({
    components: { ItemBadge },
    template: "<ItemBadge color='accent'>любой текст</ItemBadge>"
});

export const positionLeftTop = () => ({
    components: { ItemBadge },
    template: `<ItemBadge pos='left-top'>любой текст</ItemBadge>`
});

export const positionLeftBottom = () => ({
    components: { ItemBadge },
    template: `<ItemBadge pos='left-bottom'>любой текст</ItemBadge>`
});

export const positionRightBottom = () => ({
    components: { ItemBadge },
    template: `<ItemBadge pos='right-bottom'>любой текст</ItemBadge>`
});
export const positionRightTop = () => ({
    components: { ItemBadge },
    template: `<ItemBadge pos='right-top'>любой текст</ItemBadge>`
});
