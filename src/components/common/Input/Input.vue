<script>
import { TheMask } from 'vue-the-mask';

export default {
    name: 'Input',
    functional: true,
    components: {
        TheMask,
    },
    props: {
        value: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
            validator: (value) => ['text', 'tel', 'url', 'email', 'password'].includes(value),
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
        isError: {
            type: Boolean,
            default: false,
        },
        isValid: {
            type: Boolean,
            default: false,
        },
        feedbackError: {
            type: String,
            default: '',
        },
        feedbackValid: {
            type: String,
            default: '',
        },
        feedbackHelp: {
            type: String,
            default: '',
        },
        isDisplayAsBlock: {
            type: Boolean,
            default: true,
        },
        label: {
            type: String,
            default: '',
        },
        styleElement: {
            type: Object,
            default: () => ({}),
        },
        styleInput: {
            type: Object,
            default: () => ({}),
        },
        styleLabel: {
            type: Object,
            default: () => ({}),
        },
        mask: {
            type: String,
            default: '',
        },
        passwordIsVisible: {
            type: Boolean,
            default: true,
        },
        isRequired: {
            type: Boolean,
            default: false,
        },
    },
    render: (h, { data, props, listeners, scopedSlots }) => {
        const {
            value,
            placeholder,
            type,
            isDisabled,
            isDisplayAsBlock,
            isError,
            isValid,
            feedbackError,
            feedbackValid,
            feedbackHelp,
            label,
            styleElement,
            styleInput,
            styleLabel,
            mask,
            passwordIsVisible,
            isRequired,
        } = props;

        const pressEnterHandler = listeners.enter;

        const onPressEnter = (event) => {
            if (
                (event.code === 13 ||
                    event.keyCode === 13 ||
                    event.key === 'Enter') &&
                pressEnterHandler
            ) {
                pressEnterHandler(value);
            }
        };

        const onInput = (onInputValue) => {
            listeners.input && listeners.input(onInputValue);
        };

        /** Параметры передающиеся в scoped slot для label */
        const params = {
            value,
            label,
        };

        /** Получаем передаваемые в компонент слоты */
        const { labelScopedSlot } = scopedSlots;

        /** Текст label */
        const labelText = labelScopedSlot ? labelScopedSlot(params) : label;

        let feedback = feedbackHelp;

        if (isError && feedbackError) {
            feedback = feedbackError;
        }

        if (isValid && feedbackValid) {
            feedback = feedbackValid;
        }

        const typeIsPassword = type === 'password';

        const onPasswordVisibleChangeHandler =
            listeners.passwordVisibleChange ||
            listeners['password-visible-change'];

        const onPasswordVisibleChange = () => {
            onPasswordVisibleChangeHandler &&
                onPasswordVisibleChangeHandler(!passwordIsVisible);
        };

        let typeResult = type;
        if (typeIsPassword) {
            typeResult = passwordIsVisible ? 'text' : 'password';
        }

        return (
            <label
                class={[
                    'spui-Input',
                    {
                        'is-disabled': isDisabled,
                        'is-display-as-block': isDisplayAsBlock,
                        'is-error': isError,
                        'is-valid': isValid,
                        'is-required': isRequired,
                    },
                    data.class,
                    data.staticClass,
                ]}
                style={styleElement}
            >
                {mask ? (
                    <TheMask
                        vOn:keyup_native={onPressEnter}
                        value={value}
                        onInput={onInput}
                        placeholder={placeholder}
                        class="spui-Input__input"
                        type={typeResult}
                        style={styleInput}
                        disabled={isDisabled}
                        mask={mask}
                    ></TheMask>
                ) : (
                    <input
                        onKeyup={onPressEnter}
                        value={value}
                        onInput={(e) => onInput(e.target.value)}
                        placeholder={placeholder}
                        class="spui-Input__input"
                        type={typeResult}
                        disabled={isDisabled}
                        style={styleInput}
                    ></input>
                )}
                {feedback && (
                    <span class="spui-Input__feedback">{feedback}</span>
                )}
                {typeIsPassword && (
                    <button
                        onClick={onPasswordVisibleChange}
                        type="button"
                        aria-label="Сменить видимость"
                        class={[
                            'spui-Input__pswd-visibility-toggle',
                            {
                                'pswd-is-visible': passwordIsVisible,
                                'pswd-is-hidden': !passwordIsVisible,
                            },
                        ]}
                    ></button>
                )}
                {labelText && (
                    <span style={styleLabel} class="spui-Input__label">
                        {labelText}
                    </span>
                )}
            </label>
        );
    },
};
</script>

<style lang="scss" scoped>
@import './Input.scss';
</style>
