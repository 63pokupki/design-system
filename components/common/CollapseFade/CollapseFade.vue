<script>
export default {
    name: 'CollapseFade',
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
            default: '50px',
        },
        headingStyleObject: {
            type: Object,
            default: () => {},
        },
        bodyStyleObject: {
            type: Object,
            default: () => {},
        },
        arrowStyleObject: {
            type: Object,
            default: () => {},
        },
        rawHtmlData: {
            type: String,
            default: '',
        },
    },
    render(h, { data, props, listeners, slots }) {
        const slot = slots().default;

        const onChangeOpen = () => {
            listeners.onChange();
        };

        const maxHeight = props.open ? 'initial' : props.minHeightOnHide;
        const unsafeRawHtmData = props.rawHtmlData;
        const safeRawHtmlData =
            unsafeRawHtmData &&
            unsafeRawHtmData.search(/<*\/*script>*/gim) === -1
                ? unsafeRawHtmData
                : '';

        return (
            <div
                class="spui-CollapseFade"
                class={[
                    'spui-CollapseFade',
                    { 'spui-CollapseFade_expanded': props.open },
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
                {safeRawHtmlData ? (
                    <div
                        domPropsInnerHTML={safeRawHtmlData}
                        style={{
                            ...props.bodyStyleObject,
                            'max-height': maxHeight,
                        }}
                        class="spui-CollapseFade__body"
                    ></div>
                ) : (
                    <div
                        style={{
                            ...props.bodyStyleObject,
                            'max-height': maxHeight,
                        }}
                        class="spui-CollapseFade__body"
                    >
                        {slot}
                    </div>
                )}
            </div>
        );
    },
};
</script>

<style lang="scss" scoped>
@import './CollapseFade.scss';
</style>
