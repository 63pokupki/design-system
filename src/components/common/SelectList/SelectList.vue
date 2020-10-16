<template>
    <div class="spui-SelectList" :class="{ 'spui-SelectList_error': isError }">
        <div class="spui-SelectList__one" v-if="one">
            <label
                class="spui-SelectList__label"
                :class="{ 'is-selected': fnCompareIsSelected(element, selected) }"
                v-for="(element, index) in values"
                :key="index"
                :for="index + uuid"
            >
                <input
                    class="spui-SelectList__input"
                    :value="element"
                    v-model="selected"
                    type="radio"
                    :id="index + uuid"
                />
                {{ getLabel(element) || "Label не указан" }}
            </label>
        </div>
        <div class="spui-SelectList__many" v-if="!one">
            <label
                class="spui-SelectList__label"
                :class="{ 'is-selected': fnCompareIsSelected(element, selected) }"
                v-for="(element, index) in values"
                :key="index"
                :for="index + uuid"
            >
                <input
                    class="spui-SelectList__input"
                    :value="element"
                    v-model="selected"
                    type="checkbox"
                    :id="index + uuid"
                />
                {{ getLabel(element) || "Label не указан" }}
            </label>
        </div>
        <Tooltip
            class="spui-SelectList__tooltip"
            type="error"
            v-if="isError"
            forced
            :position="errorTooltipPosition"
        >
            <slot name="error-msg"
                >Чтобы добавить товар в корзину, <br> выберите необходимый параметр</slot
            >
        </Tooltip>
    </div>
</template>

<script>
import uuid from "short-uuid";
import isEqual from "lodash-es/isEqual";

import Tooltip from "../Tooltip/Tooltip.vue";

export default {
    name: "SelectList",
    components: {
        Tooltip,
    },
    props: {
        one: {
            type: Boolean,
            default: true,
        },
        values: {
            type: Array,
            required: true,
            default: () => [],
        },
        label: {
            type: Function,
            required: true,
        },
        fnCompare: {
            type: Function,
        },
        value: {
            required: true,
        },
        isError: {
            type: Boolean,
            default: false,
        },
        errorTooltipPosition: {
            type: String,
            default: "bottom",
        },
    },
    data() {
        return {
            base: "spui-SelectList",
            uuid: null,
        };
    },
    beforeMount() {
        this.uuid = uuid.generate();
    },
    computed: {
        selected: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
    methods: {
        fnCompareIsSelected(value, values) {
            const fnCompare = this.fnCompare;
            const fnCompareExist = fnCompare && typeof fnCompare == "function";

            if (this.one) {
                if (fnCompareExist) {
                    return fnCompare(value, values);
                } else {
                    return isEqual(value, values);
                }
            }
            if (!this.one) {
                if (fnCompareExist) {
                    const finded = values.find((v) => fnCompare(value, v));
                    return finded ? true : false;
                } else {
                    const finded = values.find((v) => isEqual(value, v));
                    return finded ? true : false;
                }
            }
        },
        getLabel(value) {
            if (value && this.label && typeof this.label === "function") {
                return this.label(value);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./SelectList.scss";
</style>
