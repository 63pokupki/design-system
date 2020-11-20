<template>
  <div
    class="spui-SelectList"
    :class="{ 'spui-SelectList_error': isError }"
  >
    <div
      v-if="one"
      class="spui-SelectList__one"
    >
      <label
        v-for="(element, index) in values"
        :key="index"
        class="spui-SelectList__label"
        :class="{ 'is-selected': fnCompareIsSelected(element, selected) }"
        :for="index + uuid"
      >
        <input
          :id="index + uuid"
          v-model="selected"
          class="spui-SelectList__input"
          :value="element"
          type="radio"
        >
        {{ getLabel(element) || "Label не указан" }}
      </label>
    </div>
    <div
      v-if="!one"
      class="spui-SelectList__many"
    >
      <label
        v-for="(element, index) in values"
        :key="index"
        class="spui-SelectList__label"
        :class="{ 'is-selected': fnCompareIsSelected(element, selected) }"
        :for="index + uuid"
      >
        <input
          :id="index + uuid"
          v-model="selected"
          class="spui-SelectList__input"
          :value="element"
          type="checkbox"
        >
        {{ getLabel(element) || "Label не указан" }}
      </label>
    </div>
    <Tooltip
      v-if="isError"
      class="spui-SelectList__tooltip"
      type="error"
      forced
      :position="errorTooltipPosition"
    >
      <slot
        name="error-msg"
      >
        Чтобы добавить товар в корзину, <br> выберите необходимый параметр
      </slot>
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
    beforeMount() {
        this.uuid = uuid.generate();
    },
    methods: {
        fnCompareIsSelected(value, values) {
            const { fnCompare } = this;
            const fnCompareExist = fnCompare && typeof fnCompare === "function";

            if (this.one) {
                if (fnCompareExist) {
                    return fnCompare(value, values);
                }
                return isEqual(value, values);
            }
            if (!this.one) {
                if (fnCompareExist) {
                    const finded = values.find((v) => fnCompare(value, v));
                    return !!finded;
                }
                const finded = values.find((v) => isEqual(value, v));
                return !!finded;
            }

            return false;
        },
        getLabel(value) {
            if (value && this.label && typeof this.label === "function") {
                return this.label(value);
            }
            return "";
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./SelectList.scss";
</style>
