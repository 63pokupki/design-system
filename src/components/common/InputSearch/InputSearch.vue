<script>
import uuid from "short-uuid";

const searchImg = require("@/images/important_images/search.svg");

export default {
    name: "InputSearch",
    functional: true,
    props: {
        value: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: false,
        },
        inputStyle: {
            type: Object,
            required: false,
        },
        buttonStyle: {
            type: Object,
            required: false,
        },
        size: {
            type: String,
            required: false,
        },
    },
    render: (h, {
        data, props, listeners,
    }) => {
        const value = props.value || "";
        const placeholder = props.placeholder || "Поиск";
        const inputStyle = props.inputStyle || {};
        const buttonStyle = props.buttonStyle || {};
        const size = props.buttonStyle || "sm";
        const uniqUuid = uuid.generate();

        const onSearch = () => {
            if (listeners.onSearch) {
                listeners.onSearch(value);
            }
        };

        const onKeyUpSearch = (event) => {
            if ((event.code == 13 || event.keyCode == 13 || event.key == "Enter") && listeners.onSearch) {
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
                    "spui-InputSearch",
                    `spui-InputSearch_${size}`,
                    data.class,
                    data.staticClass,
                ]}
            >
                <label for={uniqUuid}>
                    <input
                        style={inputStyle}
                        onKeyup={onKeyUpSearch}
                        value={value}
                        onInput={onInput}
                        class="spui-InputSearch__input"
                        type="text"
                        placeholder={placeholder}
                        id={uniqUuid}
                    />
                </label>
                <button aria-label="Поиск" style={buttonStyle} onClick={onSearch} class="spui-InputSearch__btn">
                    <img
                        alt="Поиск"
                        class="spui-InputSearch__img"
                        src={searchImg}
                    />
                </button>
            </div>
        );
    },
};
</script>

<style lang="scss" scoped>
@import "./InputSearch.scss";
</style>
