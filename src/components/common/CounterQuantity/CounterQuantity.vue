<script>
import uuid from "short-uuid";

export default {
    name: "CounterQuantity",
    functional: true,
    props: {
        value: {
            type: Number,
            required: true,
            default: 1,
        },
        min: {
            type: Number,
            default: 1,
        },
        max: {
            type: Number,
            default: 999,
        },
    },
    render (h, { data, props, listeners }) {
        const uniqUuid = uuid.generate();

        const { value, min, max } = props;
        /** Установка изначального значения */
        const initial = (value) => {
            listeners.input(value);
            event.target.value = value;
        };
        /** При ручном вводе числа */
        const onInput = (event) => {
            try {
                const value = Number(event.target.value);

                if (!value || isNaN(value) || value < min) {
                    initial(min);
                    return;
                }

                if (value > max) {
                    initial(max);
                    return;
                }

                listeners.input(value);
            } catch (e) {
                initial(min);
            }
        };

        const onPlus = () => {
            if (props.value == max) return;
            listeners.input(props.value + 1);
        };

        const onMinus = () => {
            if (props.value == min) return;
            listeners.input(props.value - 1);
        };

        return (
            <div class={["spui-CounterQuantity", data.class, data.staticClass]}>
                <button
                    aria-label="Уменьшить количество"
                    onClick={onMinus}
                    class="spui-CounterQuantity__minus"
                ></button>
                <label for={uniqUuid}>
                    <input
                        value={props.value}
                        onInput={(event) => onInput(event)}
                        class="spui-CounterQuantity__input"
                        type="text"
                        id={uniqUuid}
                    />
                </label>
                <button
                    aria-label="Увеличить количество"
                    onClick={onPlus}
                    class="spui-CounterQuantity__plus"
                ></button>
            </div>
        );
    },
};
</script>

<style lang="scss" scoped>
@import "./CounterQuantity.scss";
</style>
