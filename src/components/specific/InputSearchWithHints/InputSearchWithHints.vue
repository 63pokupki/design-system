<template>
    <div class="spui-InputSearchWithHints">
        <div class="spui-InputSearchWithHints__input-wrapper">
            <label class="spui-InputSearchWithHints__label">
                <input
                    :value="_value"
                    @input="_value = $event.target.value"
                    class="spui-InputSearchWithHints__input"
                    type="text"
                    autocomplete="off"
                    placeholder="Поиск"
                    @keyup.enter="onSearch"
                    @keydown.up="onKeyUp"
                    @keydown.down="onKeyDown"
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

            <div
                v-if="matchedPurchase"
                class="spui-InputSearchWithHints__matched-purchase"
            >
                {{ matchedPurchase }}
            </div>
        </div>
        <!-- блок выпадающей категории поиска -->
        <div
            v-if="false"
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
                    categories[category]
                }}</span>
                <!-- лист всех значений -->
                <ul class="spui-dropdown-fixed-list__list">
                    <li
                        class="spui-dropdown-fixed-list__list-item"
                        @click.stop="() => onCategorySelect('items')"
                    >
                        {{ categories.items }}
                    </li>
                    <li
                        class="spui-dropdown-fixed-list__list-item"
                        @click.stop="() => onCategorySelect('forum')"
                    >
                        {{ categories.forum }}
                    </li>
                </ul>
            </div>
        </div>
        <div
            v-if="isCategorySearch"
            class="spui-InputSearchWithHints__category"
            @click="onCategorySearchClick"
            v-click-outside="onClickOutside"
        >
            <!-- добавить .dropdown-fixed-list_expanded для раскрытия меню категорий -->
            <div
                 @click="onClickHideState"
                class="spui-dropdown-fixed-list spui-dropdown-fixed-list-category-search"
                :class="{ 'is-expanded': isCategorySearchOpen }"
            >
                <!-- текущее значение -->
                <span class="spui-dropdown-fixed-list__current">{{
                    categoriesSearch[indexCategorySearch]
                }}</span>
                <!-- лист всех значений -->
                <ul class="spui-dropdown-fixed-list__list">
                    <li
                        class="spui-dropdown-fixed-list__list-item"
                        :class="[categorySearch === categoriesSearch[indexCategorySearch] ? 'spui-dropdown-fixed-list__list-item_active' : '']"
                        v-for="(categorySearch, i) in categoriesSearch"
                        :key="i"
                        @click.stop="() => onCategorySearchSelect(categorySearch, i)"
                    >
                        {{ categorySearch }}
                    </li>
                </ul>
            </div>
        </div>
        <div
            v-if="isHintsOpen && category === 'items'"
            class="spui-InputSearchWithHints__hints"
        >
            <template v-if="hints && hints.length > 0">
                <div class="spui-InputSearchWithHints__divider">
                    Товары
                </div>
                <div
                    v-for="(hint, i) in hints"
                    :key="`h-${i}`"
                    class="spui-InputSearchWithHints__hint"
                    :class="{ focus: isEqual(hint, focusElement) }"
                    @click="() => onHintClick(hint)"
                >
                    <!-- eslint-disable vue/no-v-html -->
                    <span
                        class="spui-InputSearchWithHints__text"
                        v-html="highlightItem(hint)"
                    />
                    <span class="spui-InputSearchWithHints__count">{{
                        fnHintCount(hint)
                    }}</span>
                </div>
            </template>

            <template v-if="brands && brands.length > 0">
                <div class="spui-InputSearchWithHints__divider">
                    Бренды
                </div>
                <div
                    v-for="(brand, i) in brands"
                    :key="`b-${i}`"
                    class="spui-InputSearchWithHints__hint"
                    :class="{ focus: isEqual(brand, focusElement) }"
                    @click="() => onBrandClick(brand)"
                >
                    <!-- eslint-disable vue/no-v-html -->
                    <span
                        class="spui-InputSearchWithHints__text"
                        v-html="highlightBrand(brand)"
                    />
                </div>
            </template>
            <template v-if="purchases && purchases.length > 0">
                <div class="spui-InputSearchWithHints__divider">
                    Закупки
                </div>
                <div
                    v-for="(purchase, i) in purchases"
                    :key="`p-${i}`"
                    class="spui-InputSearchWithHints__hint"
                    :class="{ focus: isEqual(purchase, focusElement) }"
                    @click="() => onPurchaseClick(purchase)"
                >
                    <!-- eslint-disable vue/no-v-html -->
                    <span
                        class="spui-InputSearchWithHints__text"
                        v-html="highlightPurchase(purchase)"
                    />
                </div>
            </template>
            <template v-if="orgs && orgs.length > 0">
                <div class="spui-InputSearchWithHints__divider">
                    Организаторы
                </div>
                <div
                    v-for="(org, i) in orgs"
                    :key="`o-${i}`"
                    class="spui-InputSearchWithHints__hint"
                    :class="{ focus: isEqual(org, focusElement) }"
                    @click="() => onOrgClick(org)"
                >
                    <!-- eslint-disable vue/no-v-html -->
                    <span
                        class="spui-InputSearchWithHints__text"
                        v-html="highlightOrg(org)"
                    />
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import isEqual from 'lodash-es/isEqual';
import inRange from 'lodash-es/inRange';
import {clickOutside} from "@/directives";

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
        brands: {
            type: Array,
            default: () => [],
        },
        purchases: {
            type: Array,
            default: () => [],
        },
        orgs: {
            type: Array,
            default: () => [],
        },
        fnHintLabel: {
            type: Function,
            required: true,
        },
        fnHintCount: {
            type: Function,
            required: true,
        },
        fnBrandLabel: {
            type: Function,
            required: true,
        },
        fnPurchaseLabel: {
            type: Function,
            required: true,
        },
        fnPurchaseId: {
            type: Function,
            required: true,
        },
        fnOrgLabel: {
            type: Function,
            required: true,
        },
        fnOrgId: {
            type: Function,
            required: true,
        },
        isCategorySearch: {
            type: Boolean,
            default: false,
        },
        categoriesSearch: {
            type: Array,
            default: () => [],
        },
        isCategorySearchOpen: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            category: 'items',
            categories: {
                items: 'По товарам',
                forum: 'По форуму',
            },
            focusIndex: -1,
            indexCategorySearch: 0
        };
    },
    computed: {
        elements() {
            const { hints, brands, purchases, orgs } = this;
            return [].concat(hints).concat(brands).concat(purchases).concat(orgs);
        },
        intervals() {
            const { hints, brands, purchases, orgs } = this;
            return {
                items: hints.length > 0 ? [0, hints.length] : [-1, -1],
                brands:
                    brands.length > 0
                        ? [hints.length, hints.length + brands.length]
                        : [-1, -1],
                purchases:
                    purchases.length > 0
                        ? [
                            hints.length + brands.length,
                            hints.length + brands.length + purchases.length,
                        ]
                        : [-1, -1],
                orgs:
                    orgs.length > 0
                        ? [
                            hints.length + brands.length + purchases.length,
                            hints.length + brands.length + purchases.length + orgs.length,
                        ]
                        : [-1, -1],
            };
        },
        focusElementType() {
            if (this.focusElement && this.intervals) {
                for (const key in this.intervals) {
                    if (Object.hasOwnProperty.call(this.intervals, key)) {
                        const period = this.intervals[key];
                        const valueInRange = inRange(
                            this.focusIndex,
                            period[0],
                            period[1],
                        );
                        if (valueInRange) {
                            return key;
                        }
                    }
                }
            }

            return null;
        },
        focusElement() {
            return this.elements[this.focusIndex];
        },
        isValueNumberRegexp() {
            const value = this._value.trim();
            return Boolean(value) && /^\d+$/gim.test(value);
        },
        isCategoryItemsSelected() {
            return this.category === 'items';
        },
        matchedPurchase() {
            if (this.purchases && this.isValueNumberRegexp) {
                const purchase = this.purchases.find(
                    (p) => String(this.fnPurchaseId(p)) === this._value.trim(),
                );
                return purchase ? this.fnPurchaseLabel(purchase) : false;
            }
            return false;
        },
        _value: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
                this.emitHintsOpenState(true);

                if (this.category === 'items') {
                    this.$emit('input-by-items');
                }
            },
        },
        _trimmed() {
            return this._value.trim();
        },
        _lowercased() {
            return this._value.toLowerCase();
        },
    },
    methods: {
        isEqual,
        /** Событие смены состояния показа выбора категорий поиска - товары/форум */
        emitCategoryOpenState(value) {
            this.$emit('category-open-change', value);
        },
        /** Событие смены состояния показа подсказок */
        emitHintsOpenState(value) {
            this.$emit('hints-open-change', value);
        },
        onCategorySelect(category) {
            this.category = category;
            this.emitCategoryOpenState(false);
        },
        emitCategorySearchOpenState(value) {
            this.$emit('category-search-open-change', value, this.categorySearch);
        },
        onCategorySearchSelect(categorySearch, index) {
            this.categorySearch = categorySearch;
            this.indexCategorySearch = index;
            this.emitCategorySearchOpenState(false);
        },
        highlight(raw) {
            const lowercased = raw.toLowerCase();
            const search = this._lowercased;

            const hl = lowercased.replace(
                search,
                "<span style='font-weight: bold; color: #36a6f2;'>$&</span>",
            );

            return hl;
        },
        highlightItem(hint) {
            const raw = this.fnHintLabel(hint);
            return this.highlight(raw);
        },
        highlightBrand(brand) {
            const raw = this.fnBrandLabel(brand);
            return this.highlight(raw);
        },
        highlightPurchase(purchase) {
            const raw = this.fnPurchaseLabel(purchase);
            return this.highlight(raw);
        },
        highlightOrg(org) {
            const raw = this.fnOrgLabel(org);
            return this.highlight(raw);
        },
        onHintClick(hint) {
            this.$emit('search', {
                value: this.fnHintLabel(hint),
                items: this.isCategoryItemsSelected,
                type: 'items',
            });
            this.emitHintsOpenState(false);
            this.focusIndex = -1;
        },
        onBrandClick(brand) {
            this.$emit('search', {
                value: this.fnBrandLabel(brand),
                items: this.isCategoryItemsSelected,
                type: 'brands',
            });
            this.emitHintsOpenState(false);
            this.focusIndex = -1;
        },
        onPurchaseClick(purchase) {
            this.$emit('search', {
                value: this.fnPurchaseId(purchase),
                items: this.isCategoryItemsSelected,
                type: 'purchases',
            });
            this.emitHintsOpenState(false);
            this.focusIndex = -1;
        },
        onOrgClick(org) {
            this.$emit('search', {
                value: this.fnOrgId(org),
                items: this.isCategoryItemsSelected,
                type: 'orgs',
            });
            this.emitHintsOpenState(false);
            this.focusIndex = -1;
        },
        onCategoryClick() {
            this.emitCategoryOpenState(true);
        },
        onCategorySearchClick() {
            this.emitCategorySearchOpenState(true);
        },
        onSearch() {
            const params = {
                value: this._value,
                items: this.category === 'items',
                type: 'items',
            };

            if (this.matchedPurchase) {
                params.type = 'purchases';
            }

            if (
                this.focusElement &&
                this.isHintsOpen &&
                !this.matchedPurchase
            ) {
                const label =
                    this.fnHintLabel(this.focusElement) ||
                    this.fnBrandLabel(this.focusElement) ||
                    this.fnPurchaseId(this.focusElement) ||
                    this.fnOrgId(this.focusElement);
                params.value = label;
                params.type = this.focusElementType;
            }

            this.$emit('search', params);
            this.emitHintsOpenState(false);
            this.focusIndex = -1;
        },
        onKeyUp() {
            if (
                this.elements.length > 0 &&
                this.isHintsOpen &&
                this.focusIndex >= 0
            ) {
                this.focusIndex -= 1;
            }
        },
        onKeyDown() {
            if (
                this.elements.length > 0 &&
                this.isHintsOpen &&
                this.focusIndex < this.elements.length - 1
            ) {
                this.focusIndex += 1;
            }
        },
        onClickOutside() {
            this.emitCategoryOpenState(false);
        },
        /**Закрыть модалку при клике на "Дроп даун"*/
        onClickHideState() {
            event.stopPropagation();
            if (this.isCategorySearchOpen) {
                this.emitCategoryOpenState(false);
            } else {
                this.emitCategorySearchOpenState(true);
            }
        },
        
    },
};
</script>

<style lang="scss" scoped>
@import './InputSearchWithHints.scss';
</style>
