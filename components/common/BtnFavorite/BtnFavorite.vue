<script>
export default {
    name: 'BtnFavorite',
    functional: true,
    props: {
        /** Активное, нажатое состояние */
        isActive: {
            type: Boolean,
            default: false,
        },
        /** Состояние загрузки */
        isLoading: {
            type: Boolean,
            default: false,
        },
    },
    render: (h, { props, data, listeners }) => {
        const { isActive, isLoading } = props;

        const onClick = () => {
            if (!isLoading && listeners.click) {
                listeners.click();
            }
        };

        return (
            <button
                onClick={onClick}
                aria-label="Добавить в избранное"
                class={[
                    'BtnFavorite',
                    { 'is-active': isActive, 'is-loading': isLoading },
                    data.class,
                    data.staticClass,
                ]}
            >
                <i
                    class={[
                        'BtnFavorite__icon ds-icon',
                        {
                            'icon-heart-bold': !isActive,
                            'icon-heart-filled': isActive,
                        },
                    ]}
                ></i>
            </button>
        );
    },
};
</script>

<style lang="scss" scoped>
@import './BtnFavorite.scss';
</style>
