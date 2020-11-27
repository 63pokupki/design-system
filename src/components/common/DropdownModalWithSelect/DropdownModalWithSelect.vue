<template>
    <div class="spui-DropdownModalWithSelect">
        <div class="spui-DropdownModalWithSelect__wrapper" @click="() => setStateopen(!open)">
            <span class="spui-DropdownModalWithSelect__heading">{{ _heading }}</span>
            <i class="spui-DropdownModalWithSelect__arrow ds-icon icon-rectangle"></i>
        </div>
        <div
            v-if="_value"
            @click="() => setStateopen(!open)"
            class="spui-DropdownModalWithSelect__value"
        >
            {{ getLabel(_value) }}
        </div>

        <Modal
            minWidth="272px"
            class="spui-DropdownModalWithSelect__modal"
            @close="open = !open"
            :open="open"
        >
            <div class="spui-DropdownModalWithSelect__body">
                <div class="spui-DropdownModalWithSelect__modal-heading">{{ _heading }}</div>

                <div class="spui-DropdownModalWithSelect__radios">
                    <Radio
                        class="spui-DropdownModalWithSelect__radio"
                        v-model="_value"
                        type="primary"
                        :val="val"
                        v-for="(val, i) in values"
                        :key="i"
                    >
                        <slot name="radio" :val="val">{{ getLabel(val) }}</slot>
                    </Radio>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from "../Modal/Modal.vue";
import Tooltip from "../Tooltip/Tooltip.vue";
import Radio from "../Radio/Radio.vue";
import { capitalize } from "@/helpers";

export default {
    name: "DropdownModalWithSelect",
    components: {
        Modal,
        Radio,
        Tooltip,
    },
    props: {
        heading: {
            type: String,
            required: true,
            default: "Название не передано",
        },
        value: {
            required: true,
        },
        label: {
            type: Function,
            required: true,
        },
        values: {
            type: [Array, Object],
            required: true,
            default: () => [],
        },
    },
    data() {
        return {
            base: "spui-DropdownModalWithSelect",
            open: false,
        };
    },
    computed: {
        _heading: {
            get() {
                if (this.heading) {
                    return capitalize(this.heading);
                }
            },
        },
        _value: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
                this.open = false;
            },
        },
    },
    methods: {
        setStateopen(value) {
            this.open = value;
        },
        onSelectValue(value) {
            this._value = value;
            this.open = false;
        },
        getLabel(value) {
            if (!value || !this.label || typeof this.label !== "function") return;

            return this.label(value);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./DropdownModalWithSelect.scss";

.spui-DropdownModalWithSelect /deep/ .spui-Modal__window {
    overflow-y: initial;
}
</style>
