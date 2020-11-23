<template>
    <div class="spui-DropdownModalWithSelect">
        <div
            class="spui-DropdownModalWithSelect__wrapper"
            @click="() => setStateopen(!open)"
        >
            <span class="spui-DropdownModalWithSelect__heading">{{ _heading }}</span>
            <i class="spui-DropdownModalWithSelect__arrow ds-icon icon-rectangle" />
        </div>
        <div
            v-if="_value"
            class="spui-DropdownModalWithSelect__value"
            @click="() => setStateopen(!open)"
        >
            {{ getLabel(_value) }}
        </div>

        <Modal
            min-width="272px"
            class="spui-DropdownModalWithSelect__modal"
            :open="open"
            @close="open = !open"
        >
            <div class="spui-DropdownModalWithSelect__body">
                <div class="spui-DropdownModalWithSelect__modal-heading">
                    {{ _heading }}
                </div>

                <div class="spui-DropdownModalWithSelect__radios">
                    <Radio
                        v-for="(val, i) in values"
                        :key="i"
                        v-model="_value"
                        class="spui-DropdownModalWithSelect__radio"
                        type="primary"
                        :val="val"
                    >
                        <slot
                            name="radio"
                            :val="val"
                        >
                            {{ getLabel(val) }}
                        </slot>
                    </Radio>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
import { capitalize } from "@/helpers";
import Modal from "../Modal/Modal.vue";
import Radio from "../Radio/Radio.vue";

export default {
    name: "DropdownModalWithSelect",
    components: {
        Modal,
        Radio,
    },
    props: {
        heading: {
            type: String,
            required: true,
            default: "Название не передано",
        },
        value: {
            type: Object,
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

                return null;
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
            if (!value || !this.label || typeof this.label !== "function") return null;

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
