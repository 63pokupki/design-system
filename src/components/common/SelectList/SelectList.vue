<template>
    <div class="spui-SelectList">
        <div class="spui-SelectList__one" v-if="one">
            <label
                class="spui-SelectList__label"
                :class="{ 'is-selected': isEqual(selected, element) }"
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
                :class="{ 'is-selected': isContain(element, selected) }"
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
    </div>
</template>

<script>
import uuid from "short-uuid";
import isEqual from "lodash-es/isEqual";

export default {
    name: "SelectList",
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
            required: true
        },
        value: {
            required: true
        },
    },
    data() {
        return {
            base: "spui-SelectList",
            uuid: uuid.generate(),
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
    methods: {
        isEqual,
        isContain(elm, values) {
            if (!values) return;
            const finded = values.find((el) => isEqual(el, elm));
            return finded ? true : false;
        },
        getLabel(value) {
            if (value && this.label && typeof this.label === "function") {
                return this.label(value)
            }
        }
    },
};
</script>

<style lang="scss" scoped>
@import "./SelectList.scss";
</style>
