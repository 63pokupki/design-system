<script>
export default {
    name: "ProgressBar",
    functional: true,
    props: {
        target: {
            type: Number,
            default: 1000,
        },
        current: {
            type: Number,
            default: 500,
        },
        size: {
            type: String,
            default: "md",
            validator(value) {
                return ["sm", "md"].indexOf(value) != -1;
            },
        },
        maxWidth: {
            type: String,
        },
    },
    render(h, { data, props, scopedSlots: slots }) {
        /** Процент заполнения */
        const percent = (props.current / props.target) * 100;
        /** Параметры передающиеся в scoped slot */
        const params = {
            current: props.current,
            target: props.target,
            percent,
        };
        /** Получаем передаваемые в компонент слоты */
        const { complete, inprocess } = slots;

        /** Текст при достижении максимума или больше */
        const completeText = complete
            ? complete({ params })
            : `Собрано более ${params.target} руб.`;

        /** Текст при недостижении максимума */
        const inprocessText = inprocess
            ? inprocess({ params })
            : `Собрано ${params.current} из ${params.target} руб.`;

        /** Итоговый текст */
        const text = percent >= 100 ? completeText : inprocessText;

        return (
            <div
                style={`max-width: ${props.maxWidth};`}
                class={[
                    `spui-ProgressBar spui-ProgressBar_${props.size}`,
                    data.class,
                    data.staticClass,
                ]}
            >
                <div style={`width: ${percent}%;`} class="spui-ProgressBar__progress"></div>
                <div class="spui-ProgressBar__text">{text}</div>
            </div>
        );
    },
};
</script>

<style lang="scss" scoped>
@import "./ProgressBar.scss";
</style>
