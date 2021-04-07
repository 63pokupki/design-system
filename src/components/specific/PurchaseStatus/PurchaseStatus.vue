<script>
export default {
    name: 'PurchaseStatus',
    functional: true,
    props: {
        iconPosition: {
            required: false,
            type: String,
            default: 'left',
            validator: (value) => ['left', 'right'].includes(value),
        },
        statusId: {
            required: true,
            type: Number,
            default: 1,
            validator: (value) => value > 0,
        },
    },
    render: (h, { data, props, slots }) => {
        // Конструктор стилей иконок
        const getPurchaseStatusIcon = (status) => {
            switch (status) {
            case 1:
            case 2:
            case 3:
                return 'icon-box';
            case 4:
                return 'icon-sandglass';
            case 5:
                return 'icon-purchase-status-add-order';
            case 6:
                return 'icon-ruble';
            case 7:
                return 'icon-car';
            case 8:
                return 'icon-sort';
            case 9:
                return 'icon-boxes';
            case 11:
                return 'icon-stop';
            case 12:
                return 'icon-purchase-status-edit';
            default:
                return 'icon-box';
            }
        };

        const getPurchaseStatusColor = (status) => {
            switch (status) {
            case 1:
                return '#00c533';
            case 2:
                return '#e89a00';
            case 3:
                return '#ffe100';
            case 4:
                return '#cc6bf9';
            case 5:
                return '#e89a00';
            case 6:
                return '#f32e2e';
            case 7:
                return '#3dd2b7';
            case 8:
                return '#00c533';
            case 9:
                return '#318cca';
            case 11:
                return '#f32e2e';
            case 12:
                return '#9e9e9e';
            default:
                return '#00c533';
            }
        };

        const iconPosition = props.iconPosition || props['icon-position'];
        const statusId = props.statusId || props['status-id'];

        const _iconPosition = iconPosition && `icon-pos-${iconPosition}`;

        const slot = slots().default;

        const icon = (
            <i
                class={`spui-PurchaseStatus__icon ds-icon ${getPurchaseStatusIcon(
                    statusId,
                )}`}
            ></i>
        );

        return (
            <span
                class={[
                    'spui-PurchaseStatus',
                    _iconPosition,
                    data.class,
                    data.staticClass,
                ]}
                style={{ color: getPurchaseStatusColor(statusId) }}
            >
                {iconPosition === 'left' && icon}
                <span class="spui-PurchaseStatus__text">{slot}</span>
                {iconPosition === 'right' && icon}
            </span>
        );
    },
};
</script>

<style lang="scss" scoped>
@import './PurchaseStatus.scss';
</style>
