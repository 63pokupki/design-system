<template>
    <div class="spui-CollapseMultipleSelectList">
        <slot v-if="_isSlotBeforeExist" name="before"></slot>
        <Collapse v-model="_open" :heading="heading" :metainfo="_metainfo">
            <template slot="beforebody">
                <div class="spui-CollapseMultipleSelectList__controls">
                    <span>{{ _selectedPositionsNumber }}</span>
                    <span
                        ><span @click="onSelectAll" class="spui-CollapseMultipleSelectList__all"
                            >Выбрать все</span
                        >
                        <span
                            v-if="_displayClearButton"
                            @click="onClear"
                            class="spui-CollapseMultipleSelectList__clear"
                            >Очистить</span
                        ></span
                    >
                </div>
            </template>
            <SelectList
                slot="default"
                class="spui-CollapseMultipleSelectList__list"
                v-model="_value"
                :label="label"
                :values="_visibleElements"
                :one="false"
                :fnCompare="fnCompare"
            ></SelectList>
            <template v-if="_displayMoreButton" slot="afterbody">
                <div @click="onChangeExpand" class="spui-CollapseMultipleSelectList__more">
                    {{ listOpen ? "Свернуть" : "Показать все" }}
                </div>
            </template>
        </Collapse>
        <Tooltip v-if="_tooltip" @click.native="onTooltipClick" class="spui-CollapseMultipleSelectList__tooltip" type="accent" position="right" centered forced>Применить</Tooltip>
        <slot v-if="_isSlotAfterExist" name="after"></slot>
    </div>
</template>

<script>
import { pluralize } from "@/helpers";
import Collapse from "../../common/Collapse/Collapse.vue";
import SelectList from "../../common/SelectList/SelectList.vue";
import Tooltip from "../../common/Tooltip/Tooltip.vue";

export default {
    name: "spui-CollapseMultipleSelectList",
    components: {
        Collapse,
        SelectList,
        Tooltip,
    },
    props: {
        heading: {
            type: String,
            required: true,
            default: "Имя секции не передано",
        },
        open: {
            type: Boolean,
            default: false,
            required: true
        },
        listOpen: {
            type: Boolean,
            default: false,
            required: true
        },
        maxVisibleElements: {
            type: Number,
            default: 8,
        },
        tooltip: {
            type: Boolean,
            default: false
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
        fnCompare: {
            type: Function
        }
    },
    computed: {
        _isSlotBeforeExist() {
            return Boolean(this.$slots["before"]);
        },
        _isSlotAfterExist() {
            return Boolean(this.$slots["after"]);
        },
        /** Показывать tooltip или нет */
        _tooltip: {
            get() {
                return this._open && this.tooltip ? true : false;
            }
        },
        /** Показывать кнопку "Очистить", если хоть один параметр выбран */
        _displayClearButton: {
            get() {
                if (!this._value || this._value.length == 0) return false;
                return true;
            },
        },
        /** Показывать кнопку "Показать больше/свернуть", если задано ограничение на количество отображаемых элементов и оно меньше чем полный лист */
        _displayMoreButton: {
            get() {
                if (this.maxVisibleElements != 0 && this.maxVisibleElements < this.values.length) {
                    return true;
                }

                return false;
            },
        },
        /** Текст - количество выбранных позиций */
        _selectedPositionsNumber: {
            get() {
                if (!this._value) return;
                const selected = this._value.length;
                const all = this.values.length;

                switch (selected) {
                    case 0:
                        return "Выберите параметр";
                        break;

                    case all:
                        return "Выбрано все";
                        break;

                    default:
                        return `${selected} ${pluralize(selected, [
                            "позиция",
                            "позиции",
                            "позиций",
                        ])}`;
                        break;
                }
            },
        },
        /** Раскрыта секция или нет */
        _open: {
            get() {
                return this.open;
            },
            set(value) {
                this.$emit("collapse", value);
            },
        },
        /** Выбранное значение параметров - массив выбранных характеристик */
        _value: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
                this.$emit("tooltipStateChange", true);
            },
        },
        /** Мета информация о выбранных параметрах при сокрытии секции */
        _metainfo: {
            get() {
                if (this._value && this._value.length) {
                    const str = this._value.reduce((acc, el) => {
                        return acc + this.label(el) + ", ";
                    }, "");
                    const sliced = str.slice(0, str.length - 2);
                    return sliced;
                }
            },
        },
        /** Количество видимых элементов в секции */
        _visibleElements: {
            get() {
                if (this.maxVisibleElements > 0 && !this.listOpen) {
                    return this.values.slice(0, this.maxVisibleElements);
                }

                if (this.maxVisibleElements > 0 && this.listOpen) {
                    return this.values;
                }

                return this.values;
            },
        },
    },
    methods: {
        onClear() {
            this.$emit("input", []);
            this.$emit("tooltipStateChange", true);
        },
        onSelectAll() {
            this.$emit("input", this.values);
            this.$emit("changeListOpen", true);
            this.$emit("tooltipStateChange", true);
        },
        onChangeExpand() {
            this.$emit("changeListOpen", !this.listOpen);
        },
        onTooltipClick() {
            this.$emit("tooltipClick")
        }
    },
};
</script>

<style lang="scss" scoped>
@import "./CollapseMultipleSelectList.scss";
</style>
