<template>
    <div :class="[_isOpenedClass]" class="spui-DropdownSection">
        <div @click="_model = !_model" class="spui-DropdownSection__head">
            <div class="spui-DropdownSection__heading">
                <span>{{ _heading }}</span
                ><i class="spui-DropdownSection__arrow ds-icon icon-arrow-down"></i>
            </div>
            <div class="spui-DropdownSection__metainfo">
                {{ _metainfo }}
            </div>
        </div>
        <div v-if="_isSlotBeforeBodyExist && _model" class="spui-DropdownSection__slot-beforebody">
            <slot name="beforebody"></slot>
        </div>
        <div v-if="_isSlotDefaultExist && _model" class="spui-DropdownSection__body">
            <slot></slot>
        </div>
        <div v-if="_isSlotAfterBodyExist && _model" class="spui-DropdownSection__slot-afterbody">
            <slot name="afterbody"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "DropdownSection",
    props: {
        heading: {
            type: String,
            default: "Имя секции не передано",
        },
        metainfo: {
            type: String,
            default: "",
        },
        value: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            base: "spui-DropdownSection",
        };
    },
    computed: {
        _model: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
        _isOpenedClass() {
            return this._model ? `${this.base}_opened` : `${this.base}_collapsed`;
        },
        _heading() {
            if (this.heading) {
                return this.heading[0].toUpperCase() + this.heading.slice(1);
            }
        },
        _metainfo() {
            if (this.metainfo) {
                return this.metainfo[0].toUpperCase() + this.metainfo.slice(1);
            }
        },
        _isSlotDefaultExist() {
            return Boolean(this.$slots["default"]);
        },
        _isSlotBeforeBodyExist() {
            return Boolean(this.$slots["beforebody"]);
        },
        _isSlotAfterBodyExist() {
            return Boolean(this.$slots["afterbody"]);
        },
    },
    methods: {},
};
</script>

<style lang="scss">
@import "./DropdownSection.scss";
</style>
