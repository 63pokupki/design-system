<template functional>
    <div
        v-on="listeners"
        :style="props.styleObj"
        class="spui-BadgeCategoryTag"
        :class="[
            data.class,
            data.staticClass,
            `spui-BadgeCategoryTag_${props.size}`,
            { [`spui-BadgeCategoryTag_active`]: props.active },
        ]"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BadgeCategoryTag",
    props: {
        size: {
            type: String,
            default: "sm",
            validator: function (value) {
                return ["sm", "lg"].indexOf(value) != -1;
            },
        },
        styleObj: {
            type: Object,
            default: () => {},
        },
        active: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./BadgeCategoryTag.scss";
</style>
