<script>
export default {
    name: 'Rating',
    functional: true,
    props: {
        /** Положение иконки */
        iconPosition: {
            type: String,
            default: 'left',
            validator: (value) => ['left', 'right'].includes(value),
        },
    },
    render: (h, { data, props, slots }) => {
        const iconPosition = props.iconPosition || props['icon-position'];

        const _iconPosition = iconPosition && `icon-pos-${iconPosition}`;

        const slot = slots().default;

        const icon = <i class={'spui-Rating__icon ds-icon icon-star'}></i>;

        return (
            <span
                class={[
                    'spui-Rating',
                    _iconPosition,
                    data.class,
                    data.staticClass,
                ]}
            >
                {iconPosition === 'left' && icon}
                <span class="spui-Rating__text">{slot}</span>
                {iconPosition === 'right' && icon}
            </span>
        );
    },
};
</script>

<style lang="scss" scoped>
@import './Rating.scss';
</style>
