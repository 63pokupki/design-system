<script>
export default {
    name: "Button",
    functional: true,
    props: {
        type: {
            type: String,
            default: "primary",
            validator: (value) => {
                return ["outlined", "primary"].indexOf(value) != -1;
            },
        },
        icon: {
            type: Object,
            default: () => ({
                name: "",
                pos: "", //left/right
            }),
        },
        block: {
            type: Boolean,
            default: false,
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
    },
    render: (h, { data, props, listeners, slots }) => {
        const { type, icon, block, isDisabled, isLoading } = props;

        const _type = `spui-Button_${type}`;
        const _block = block ? `spui-Button_block` : "";
        const _iconpos = icon.pos ? `spui-Button_icon-${icon.pos}` : "";

        const onClick = () => {
            if (!isLoading && listeners.click) {
                listeners.click();
            }
        };

        const slot = slots().default || "Кнопка";

        const iconElement = (
            <i class={["ds-icon spui-Button__icon", icon.name]}></i>
        );

        return (
            <button
                onClick={onClick}
                disabled={isDisabled}
                class={[
                    "spui-Button",
                    _type,
                    _block,
                    _iconpos,
                    { "is-loading": isLoading, "is-disabled": isDisabled },
                    data.class,
                    data.staticClass,
                ]}
            >
                {icon.name && icon.pos == "left" ? iconElement : null}
                {slot}
                {icon.name && icon.pos == "right" ? iconElement : null}
            </button>
        );
    },
};
</script>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
