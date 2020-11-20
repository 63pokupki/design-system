<script>
export default {
    name: "ItemBadge",
    functional: true,
    props: {
        color: {
            type: String,
            default: "primary",
        },
        pos: {
            type: String,
            default: "left-top",
        },
    },
    render: (h, { props, data, slots }) => {
        const { color, pos } = props;
        const _color = `ItemBadge_${color}`;
        const _pos = `ItemBadge_${pos}`;

        const slot = slots().default;

        return (
            <span
                class={[
                    "ItemBadge",
                    _color,
                    _pos,
                    data.class,
                    data.staticClass,
                ]}
            >
                {slot}
            </span>
        );
    },
};
</script>

<style lang="scss" scoped>
@import "./ItemBadge.scss";
</style>
