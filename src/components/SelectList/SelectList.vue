<template>
    <div class="spui-SelectList">
        <div class="spui-SelectList__one" v-if="one">
            <label
                class="spui-SelectList__label"
                :class="{ 'is-selected': isEqual(selected, element) }"
                v-for="(element, index) in list"
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
                {{ element[label] || "Label не указан" }}
            </label>
        </div>
        <div class="spui-SelectList__many" v-if="!one">
            <label
                class="spui-SelectList__label"
                :class="{ 'is-selected': isContain(element, selected) }"
                v-for="(element, index) in list"
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
                {{ element[label] || "Label не указан" }}
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
        list: {
            type: Array,
            default: () => [],
        },
        label: {
            type: String,
            default: "label",
        },
        value: {}
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
                this.$emit("change", value);
            },
        },
    },
    methods: {
        isEqual,
        isContain(elm, list) {
            const finded = list.find((el) => isEqual(el, elm));
            return finded ? true : false;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./SelectList.scss";
</style>
