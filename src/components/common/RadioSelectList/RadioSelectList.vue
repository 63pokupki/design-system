<script>
export default {
    name: 'RadioSelectList',
    functional: true,
    props: {
        value: {
            type: [String, Number],
            required: true,
        },
        values: {
            type: [Object, Array],
            required: true,
        },
        text: {
            type: String,
            default: '',
        },
        position: {
            type: String,
            default: 'left',
            validator: (value) => ['left', 'right'].includes(value),
        },
    },
    render: (h, { data, props, listeners }) => {
        const { value, values, text, position } = props;

        const onClick = (val) => {
            if (listeners.input) {
                listeners.input(val);
            }
        };

        return (
            <div
                style={data.staticStyle}
                class={['spui-RadioSelectList', data.class, data.staticClass]}
            >
                {text && position === 'left' && (
                    <span class="spui-RadioSelectList__before">{text}</span>
                )}
                <div class="spui-RadioSelectList__values">
                    {values &&
                        values.map((val) => (
                            <button
                                onClick={() => onClick(val)}
                                class={[
                                    'spui-RadioSelectList__value',
                                    {
                                        'spui-RadioSelectList__selected':
                                            val === value,
                                    },
                                ]}
                            >
                                {val}
                            </button>
                        ))}
                </div>
                {text && position === 'right' && (
                    <span class="spui-RadioSelectList__after">{text}</span>
                )}
            </div>
        );
    },
};
</script>

<style lang="scss" scoped>
@import './RadioSelectList.scss';
</style>
