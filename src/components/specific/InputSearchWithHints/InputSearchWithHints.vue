<template>
    <div class="spui-InputSearchWithHints">
        <div class="spui-InputSearchWithHints__input-wrapper">
            <label
                class="spui-InputSearchWithHints__label"
                :for="uuid"
            >
                <input
                    :id="uuid"
                    v-model="_model"
                    class="spui-InputSearchWithHints__input"
                    type="text"
                    placeholder="Поиск"
                    @keyup.enter="onSearch"
                    @keyup.up="onFocusIndexUp"
                    @keyup.down="onFocusIndexDown"
                >
            </label>

            <button
                type="button"
                aria-label="Поиск"
                class="spui-InputSearchWithHints__btn"
                @click="onSearch"
            >
                <img
                    alt="Поиск"
                    src="~images/important_images/search.svg"
                >
            </button>
        </div>
        <!-- блок выпадающей категории поиска -->
        <div
            class="spui-InputSearchWithHints__category"
            @click="onCategoryClick"
        >
            <!-- добавить .dropdown-fixed-list_expanded для раскрытия меню категорий -->
            <div
                class="spui-dropdown-fixed-list"
                :class="{ 'is-expanded': isCategoryOpen }"
            >
                <!-- текущее значение -->
                <span class="spui-dropdown-fixed-list__current">{{
                    categories[categories.current]
                }}</span>
                <!-- лист всех значений -->
                <ul class="spui-dropdown-fixed-list__list">
                    <li
                        class="spui-dropdown-fixed-list__list-item"
                        @click.stop="() => onCategorySelect(1)"
                    >
                        {{ categories[1] }}
                    </li>
                    <li
                        class="spui-dropdown-fixed-list__list-item"
                        @click.stop="() => onCategorySelect(0)"
                    >
                        {{ categories[0] }}
                    </li>
                </ul>
            </div>
        </div>
        <div
            v-if="hints && isHintsOpen && categories.current"
            class="spui-InputSearchWithHints__hints"
        >
            <div
                v-for="(hint, i) in hints"
                :key="i"
                class="spui-InputSearchWithHints__hint"
                :class="{ focus: focusIndex == i }"
                @click="() => onHintClick(hint)"
            >
                <!-- eslint-disable vue/no-v-html -->
                <span
                    class="spui-InputSearchWithHints__text"
                    v-html="highlight(hint)"
                />
                <span class="spui-InputSearchWithHints__count">{{
                    getHintCount(hint)
                }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { clickOutside } from '@/directives';
import uuid from 'short-uuid';

export default {
    name: 'InputSearchWithHints',
    directives: {
        'click-outside': clickOutside,
    },
    props: {
        value: {
            type: String,
            default: '',
        },
        isHintsOpen: {
            type: Boolean,
            default: false,
        },
        isCategoryOpen: {
            type: Boolean,
            default: false,
        },
        hints: {
            type: Array,
            default: () => [],
        },
        fnHintLabel: {
            type: Function,
            default: (hint) => hint.label,
        },
        fnHintCount: {
            type: Function,
            default: (hint) => hint.count,
        },
    },
    data() {
        return {
            categories: {
                1: 'По товарам',
                0: 'По форуму',
                current: 1,
            },
            focusIndex: -1,
            uuid: null,
        };
    },
    computed: {
        focusElement() {
            return this.hints[this.focusIndex];
        },
        _model: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
                this.emitHintsOpenState(true);

                if (this.categories.current) {
                    this.$emit('input-by-items');
                }
            },
        },
    },
    mounted() {
        this.uuid = uuid.generate();
    },
    methods: {
        /** Событие смены состояния показа выбора категорий поиска - товары/форум */
        emitCategoryOpenState(value) {
            this.$emit('category-open-change', value);
        },
        /** Событие смены состояния показа подсказок */
        emitHintsOpenState(value) {
            this.$emit('hints-open-change', value);
        },
        onCategorySelect(categoryId) {
            this.categories.current = categoryId;
            this.emitCategoryOpenState(false);
        },
        highlight(hint) {
            const raw = this.getHintLabel(hint).toLowerCase();
            const search = this._model.toLowerCase();

            const hl = raw.replace(
                search,
                "<span style='font-weight: bold; color: #36a6f2;'>$&</span>",
            );

            return hl;
        },
        /** Функция получающая label для подсказки */
        getHintLabel(hint) {
            if (
                hint &&
                this.fnHintLabel &&
                typeof this.fnHintLabel === 'function'
            ) {
                return this.fnHintLabel(hint);
            }
            return hint.label;
        },
        /** Функция получающая count для подсказки */
        getHintCount(hint) {
            if (
                hint &&
                this.fnHintCount &&
                typeof this.fnHintCount === 'function'
            ) {
                return this.fnHintCount(hint);
            }
            return hint.count;
        },
        onHintClick(hint) {
            this.$emit('hint-click', hint);
            this.emitHintsOpenState(false);
        },
        onCategoryClick() {
            this.emitCategoryOpenState(true);
        },
        onClickOutside() {
            this.emitHintsOpenState(false);
            this.emitCategoryOpenState(false);
        },
        onSearch() {
            if (this.focusIndex >= 0 && this.focusElement) {
                this._model = this.getHintLabel(this.focusElement);
            }
            this.$emit('search', {
                value: this._model,
                byItems: Boolean(this.categories.current),
            });
        },
        onFocusIndexUp() {
            if (
                this.hints.length > 0 &&
                this.isHintsOpen &&
                this.focusIndex > 0
            ) {
                this.focusIndex -= 1;
            }
        },
        onFocusIndexDown() {
            if (
                this.hints.length > 0 &&
                this.isHintsOpen &&
                this.focusIndex < this.hints.length - 1
            ) {
                this.focusIndex += 1;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import './InputSearchWithHints.scss';
</style>
