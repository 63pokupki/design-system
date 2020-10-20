<script>
export default {
    name: "InputSearch",
    functional: true,
    props: {
        value: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        inputStyle: {
            type: Object,
        },
        buttonStyle: {
            type: Object,
        },
        size: {
            type: String,
        },
    },
    render: (h, { data, props, listeners, slots }) => {
        const value = props.value || "";
        const placeholder = props.placeholder || "Поиск";
        const inputStyle = props.inputStyle || {};
        const buttonStyle = props.buttonStyle || {};
        const size = props.buttonStyle || "sm";

        const onSearch = (event) => {
            listeners.onSearch ? listeners.onSearch(value) : () => {};
        };

        const onKeyUpSearch = (event) => {
            if (event.code == 13 || event.keyCode == 13 || event.key == "Enter")
                listeners.onSearch ? listeners.onSearch(value) : () => {};
        };

        const onInput = (event) => {
            listeners.input ? listeners.input(event.target.value) : () => {};
        };

        return (
            <div style={data.staticStyle} class={["spui-InputSearch", `spui-InputSearch_${size}`]}>
                <input
                    style={inputStyle}
                    onKeyup={onKeyUpSearch}
                    value={value}
                    onInput={onInput}
                    class={["spui-InputSearch__input", data.class, data.staticClass]}
                    type="text"
                    placeholder={placeholder}
                />
                <button style={buttonStyle} onClick={onSearch} class="spui-InputSearch__btn">
                    <img
                        class="spui-InputSearch__img"
                        src={require("@/images/important_images/search.svg")}
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
