<script>
export default {
    name: "CollapseFade",
    functional: true,
    props: {
        heading: {
            type: String,
            required: true,
        },
        open: {
            type: Boolean,
            required: true,
            default: false,
        },
        minHeightOnHide: {
            type: String,
            default: "50px",
        },
        headingStyleObject: {
            type: Object,
        },
        bodyStyleObject: {
            type: Object,
        },
        arrowStyleObject: {
            type: Object,
        },
    },
    render(h, { data, props, listeners, slots }) {
        const slot = slots().default;

        const onChangeOpen = () => {
            listeners.onChange();
        };

        const maxHeight = props.open ? "initial" : props.minHeightOnHide;

        return (
            <div
                class="spui-CollapseFade"
                class={[
                    "spui-CollapseFade",
                    { "spui-CollapseFade_expanded": props.open },
                    data.class,
                    data.staticClass,
                ]}
            >
                <div
                    onClick={onChangeOpen}
                    style={props.headingStyleObject}
                    class="spui-CollapseFade__heading"
                >
                    <span>{props.heading}</span>
                    <i
                        style={props.arrowStyleObject}
                        class="spui-CollapseFade__arrow ds-icon icon-arrow-down"
                    ></i>
                </div>
                <div
                    style={{ ...props.bodyStyleObject, "max-height": maxHeight }}
                    class="spui-CollapseFade__body"
                >
                    {slot}
                </div>
            </div>
        );
    },
};
</script>

<style lang="scss" scoped>
@import "./CollapseFade.scss";
</style>
