<script>
export default {
    name: 'Button',
    functional: true,
    props: {
        /** Внешний вид кнопки - стандартная, инвертированная */
        type: {
            type: String,
            default: 'primary',
            validator: (value) => ['outlined', 'primary'].includes(value),
        },
        /** Название иконки */
        iconName: {
            type: String,
            default: '',
        },
        /** Положение иконки */
        iconPosition: {
            type: String,
            default: 'right',
            validator: (value) => ['left', 'right'].includes(value),
        },
        /** Сделать блочным элементом - занимает всю ширину */
        block: {
            type: Boolean,
            default: false,
        },
        /** Неактивное состояние - нажатия не обрабатываются */
        isDisabled: {
            type: Boolean,
            default: false,
        },
        /** Состояние загрузки - нажатия необрабатываются */
        isLoading: {
            type: Boolean,
            default: false,
        },
        /** Атрибут aria-label для доступности */
        ariaLabel: {
            type: String,
            default: 'Кнопка',
        },
    },
    render: (h, { data, props, listeners, slots }) => {
        const {
            type,
            iconName,
            iconPosition,
            block,
            isDisabled,
            isLoading,
        } = props;

        const _type = `spui-Button_${type}`;
        const _block = block && 'spui-Button_block';
        const _iconPosition =
            iconPosition && `spui-Button_icon-${iconPosition}`;

        const onClick = () => {
            if (!isLoading && listeners.click) {
                listeners.click();
            }
        };

        const slot = slots().default || 'Кнопка';

        const iconElement = (
            <i class={['ds-icon spui-Button__icon', iconName]}></i>
        );

        return (
            <button
                aria-label={props.ariaLabel}
                onClick={onClick}
                type="button"
                disabled={isDisabled}
                class={[
                    'spui-Button',
                    _type,
                    _block,
                    _iconPosition,
                    { 'is-loading': isLoading, 'is-disabled': isDisabled },
                    data.class,
                    data.staticClass,
                ]}
            >
                {iconName && iconPosition === 'left' && iconElement}
                {slot}
                {iconName && iconPosition === 'right' && iconElement}
            </button>
        );
    },
};
</script>

<style lang="scss" scoped>
@import './Button.scss';
</style>
