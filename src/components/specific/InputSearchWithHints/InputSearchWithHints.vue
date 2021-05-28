<template>
    <div class="spui-InputSearchWithHints">
        <div class="spui-InputSearchWithHints__input-wrapper">
            <label class="spui-InputSearchWithHints__label">
                <input
                    v-model="_value"
                    class="spui-InputSearchWithHints__input"
                    type="text"
                    placeholder="Поиск"
                    @keyup.enter="onSearch"
                    @keyup.up="onKeyUp"
                    @keyup.down="onKeyDown"
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
        </div>
    </div>
</template>

<script>
import isEqual from 'lodash-es/isEqual';
import inRange from 'lodash-es/inRange';

export default {
    name: 'InputSearchWithHints',
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
    },
    data() {
        return {
            category: 'items',
            categories: {
                items: 'По товарам',
                forum: 'По форуму',
            },
            focusIndex: -1,
        };
    },
    computed: {
        elements() {
            const { hints, brands, purchases } = this;
            return [].concat(hints).concat(brands).concat(purchases);
        },
        intervals() {
            const { hints, brands, purchases } = this;
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
        onCategoryClick() {
            this.emitCategoryOpenState(true);
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
                    this.fnPurchaseId(this.focusElement);
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
    },
};
</script>

<style lang="scss" scoped>
@import './InputSearchWithHints.scss';
</style>
