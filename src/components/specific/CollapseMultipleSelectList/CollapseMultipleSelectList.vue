<template>
    <div class="spui-CollapseMultipleSelectList">
        <slot
            v-if="_isSlotBeforeExist"
            name="before"
        />
        <Collapse
            v-model="_open"
            :heading="heading"
            :metainfo="_metainfo"
        >
            <template slot="beforebody">
                <div class="spui-CollapseMultipleSelectList__controls">
                    <span>{{ _selectedPositionsNumber }}</span>
                    <span><span
                              class="spui-CollapseMultipleSelectList__all"
                              @click="onSelectAll"
                          >Выбрать все</span>
                        <span
                            v-show="_displayClearButton"
                            class="spui-CollapseMultipleSelectList__clear"
                            @click="onClear"
                        >Очистить</span></span>
                </div>
                <InputSearch
                    v-if="displaySearchInput"
                    v-model="_inputValue"
                    :placeholder="searchPlaceholder"
                    class="spui-CollapseMultipleSelectList__search"
                    @onSearch="onSearch"
                />
            </template>
            <SelectList
                slot="default"
                v-model="_value"
                class="spui-CollapseMultipleSelectList__list"
                :label="label"
                :values="_visibleElements"
                :one="false"
                :fn-compare="fnCompare"
                @click.native="onClick"
            />
            <template
                v-show="_displayMoreButton"
                slot="afterbody"
            >
                <div
                    class="spui-CollapseMultipleSelectList__more"
                    @click="onChangeExpand"
                >
                    {{ listOpen ? 'Свернуть' : 'Показать все' }}
                </div>
            </template>
        </Collapse>
        <Tooltip
            v-show="_tooltip"
            class="spui-CollapseMultipleSelectList__tooltip"
            :style="{ top: `${yCord}px` }"
            type="accent"
            position="right"
            centered
            forced
            @click.native="onTooltipClick"
        >
            Применить
        </Tooltip>
        <slot
            v-if="_isSlotAfterExist"
            name="after"
        />
    </div>
</template>

<script>
import { pluralize } from '@/helpers';
import Collapse from '../../common/Collapse/Collapse.vue';
import SelectList from '../../common/SelectList/SelectList.vue';
import Tooltip from '../../common/Tooltip/Tooltip.vue';
import InputSearch from '../../common/InputSearch/InputSearch.vue';

export default {
    name: 'SpuiCollapseMultipleSelectList',
    components: {
        Collapse,
        SelectList,
        Tooltip,
        InputSearch,
    },
    props: {
        heading: {
            type: String,
            required: true,
            default: 'Имя секции не передано',
        },
        open: {
            type: Boolean,
            default: false,
            required: true,
        },
        listOpen: {
            type: Boolean,
            default: false,
            required: true,
        },
        maxVisibleElements: {
            type: Number,
            default: 8,
        },
        tooltip: {
            type: Boolean,
            default: false,
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
        value: {
            type: [Array],
            required: true,
        },
        // eslint-disable-next-line vue/require-default-prop
        fnCompare: {
            type: Function,
        },
        inputSearchValue: {
            type: String,
            default: '',
        },
        displaySearchInput: {
            type: Boolean,
            default: false,
        },
        searchPlaceholder: {
            type: String,
            default: 'Поиск по параметрам',
        },
    },
    data() {
        return {
            yCord: 0,
        };
    },
    computed: {
        _inputValue: {
            get() {
                return this.inputSearchValue;
            },
            set(value) {
                this.$emit('inputSearchValue', value);
            },
        },
        _isSlotBeforeExist() {
            return Boolean(this.$slots.before);
        },
        _isSlotAfterExist() {
            return Boolean(this.$slots.after);
        },
        /** Показывать tooltip или нет */
        _tooltip: {
            get() {
                return !!(this._open && this.tooltip);
            },
        },
        /** Показывать кнопку "Очистить", если хоть один параметр выбран */
        _displayClearButton: {
            get() {
                if (!this._value || this._value.length === 0) return false;
                return true;
            },
        },
        /** Показывать кнопку "Показать больше/свернуть",
         * если задано ограничение на количество отображаемых
         * элементов и оно меньше чем полный лист */
        _displayMoreButton: {
            get() {
                if (
                    this.maxVisibleElements !== 0 &&
                    this.maxVisibleElements < this.values.length
                ) {
                    return true;
                }

                return false;
            },
        },
        /** Текст - количество выбранных позиций */
        _selectedPositionsNumber: {
            get() {
                if (!this._value) return null;
                const selected = this._value.length;
                const all = this.values.length;

                switch (selected) {
                case 0:
                    return 'Выберите параметр';

                case all:
                    return 'Выбрано все';

                default:
                    return `${selected} ${pluralize(selected, [
                        'позиция',
                        'позиции',
                        'позиций',
                    ])}`;
                }
            },
        },
        /** Раскрыта секция или нет */
        _open: {
            get() {
                return this.open;
            },
            set(value) {
                this.$emit('collapse', value);
            },
        },
        /** Выбранное значение параметров - массив выбранных характеристик */
        _value: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
                this.$emit('tooltipStateChange', true);
            },
        },
        /** Мета информация о выбранных параметрах при сокрытии секции */
        _metainfo: {
            get() {
                if (this._value && this._value.length) {
                    const str = this._value.reduce(
                        (acc, el) => `${acc + this.label(el)}, `,
                        '',
                    );
                    const sliced = str.slice(0, str.length - 2);
                    return sliced;
                }

                return '';
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
            this.$emit('input', []);
            this.$emit('tooltipStateChange', true);
        },
        onSelectAll() {
            this.$emit('onSelectAll');
            this.yCord = 30;
        },
        onChangeExpand() {
            this.$emit('changeListOpen', !this.listOpen);
        },
        onTooltipClick() {
            this.$emit('tooltipClick');
        },
        onSearch(value) {
            this.$emit('onSearch', value);
        },
        onClick(e) {
            const t = e.target;
            if (t.classList.contains('spui-SelectList__label')) {
                this.yCord = t.offsetTop - 5;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import './CollapseMultipleSelectList.scss';
</style>
