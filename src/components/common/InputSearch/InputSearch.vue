<script>
const searchImg = require('@/images/important_images/search.svg');

export default {
    name: 'InputSearch',
    functional: true,
    props: {
        value: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: false,
            default: 'Поиск',
        },
        inputStyle: {
            type: Object,
            required: false,
            default: () => {},
        },
        buttonStyle: {
            type: Object,
            required: false,
            default: () => {},
        },
        size: {
            type: String,
            required: false,
            default: 'sm',
        },
        isSearchBtnVisible: {
            type: Boolean,
            default: true,
        },
        isClearBtnVisible: {
            type: Boolean,
            default: false,
        },
    },
    render: (h, { data, props, listeners }) => {
        const value = props.value || '';
        const placeholder = props.placeholder || 'Поиск';
        const inputStyle = props.inputStyle || {};
        const buttonStyle = props.buttonStyle || {};
        const size = props.size || 'sm';
        const isSearchBtnVisible = Boolean(props.isSearchBtnVisible);
        const isClearBtnVisible = Boolean(props.isClearBtnVisible);
        const paddingRightCoefficient =
            Number(isSearchBtnVisible) + Number(isClearBtnVisible);

        const isButtonsExist = isSearchBtnVisible || isClearBtnVisible;

        const onSearchHandler = listeners.onSearch || listeners['on-search'];
        const onClearHandler = listeners.onClear || listeners['on-clear'];

        const onSearch = () => {
            if (onSearchHandler) {
                onSearchHandler(value);
            }
        };

        const onClear = () => {
            if (onClearHandler) {
                onClearHandler();
            }
        };

        const onKeyUpSearch = (event) => {
            if (
                (event.code === 13 ||
                    event.keyCode === 13 ||
                    event.key === 'Enter') &&
                listeners.onSearch
            ) {
                listeners.onSearch(value);
            }
        };

        const onInput = (event) => {
            if (listeners.input) {
                listeners.input(event.target.value);
            }
        };

        return (
            <div
                style={data.staticStyle}
                class={[
                    'spui-InputSearch',
                    `spui-InputSearch_${size}`,
                    `padding-right-x${paddingRightCoefficient}`,
                    data.class,
                    data.staticClass,
                ]}
            >
                <label>
                    <input
                        style={inputStyle}
                        onKeyup={onKeyUpSearch}
                        value={value}
                        onInput={onInput}
                        class="spui-InputSearch__input"
                        type="text"
                        placeholder={placeholder}
                    />
                </label>
                {isButtonsExist && (
                    <div class="spui-InputSearch__btns">
                        {isSearchBtnVisible && (
                            <button
                                type="button"
                                aria-label="Поиск"
                                style={buttonStyle}
                                onClick={onSearch}
                                class="spui-InputSearch__btn spui-InputSearch__submit"
                            >
                                <img
                                    alt="Поиск"
                                    class="spui-InputSearch__img"
                                    src={searchImg}
                                />
                            </button>
                        )}
                        {isClearBtnVisible && (
                            <button
                                type="button"
                                aria-label="Очистить"
                                style={buttonStyle}
                                onClick={onClear}
                                class="spui-InputSearch__btn spui-InputSearch__clear"
                            >
                                <i class="ds-icon icon-stop"></i>
                            </button>
                        )}
                    </div>
                )}
            </div>
        );
    },
};
</script>

<style lang="scss" scoped>
@import './InputSearch.scss';
</style>
