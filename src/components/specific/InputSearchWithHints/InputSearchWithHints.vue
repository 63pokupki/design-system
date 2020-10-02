<template>
    <div v-click-outside="onClickOutside" class="spui-InputSearchWithHints">
        <div class="spui-InputSearchWithHints__input-wrapper">
            <input
                v-model="_model"
                class="spui-InputSearchWithHints__input"
                type="text"
                placeholder="Поиск"
            />
            <button @click="onSearch" class="spui-InputSearchWithHints__btn">
                <img src="~images/important_images/search.svg" />
            </button>
        </div>
        <!-- блок выпадающей категории поиска -->
        <div @click="onCategoryClick" class="spui-InputSearchWithHints__category">
            <!-- добавить .dropdown-fixed-list_expanded для раскрытия меню категорий -->
            <div class="spui-dropdown-fixed-list" :class="{ 'is-expanded': isCategoryOpen }">
                <!-- текущее значение -->
                <span class="spui-dropdown-fixed-list__current">{{
                    categories[categories.current]
                }}</span>
                <!-- лист всех значений -->
                <ul class="spui-dropdown-fixed-list__list">
                    <li
                        @click.stop="() => onCategorySelect(1)"
                        class="spui-dropdown-fixed-list__list-item"
                    >
                        {{ categories[1] }}
                    </li>
                    <li
                        @click.stop="() => onCategorySelect(0)"
                        class="spui-dropdown-fixed-list__list-item"
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
                @click="() => onHintClick(hint)"
                class="spui-InputSearchWithHints__hint"
                v-for="(hint, i) in hints"
                :key="i"
            >
                <span v-html="highlight(hint)" class="spui-InputSearchWithHints__text"></span>
                <span class="spui-InputSearchWithHints__count">{{ getHintCount(hint) }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { clickOutside } from "@/directives";

export default {
    name: "InputSearchWithHints",
    props: {
        value: {
            type: String,
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
        },
        fnHintLabel: {
            type: Function,
        },
        fnHintCount: {
            type: Function,
        },
    },
    data() {
        return {
            categories: {
                1: "По товарам",
                0: "По форуму",
                current: 1,
            },
        };
    },
    directives: {
        "click-outside": clickOutside,
    },
    methods: {
        onCategorySelect(category_id) {
            this.categories.current = category_id;
            this.$emit("category-open-change", false);
        },
        highlight(hint) {
            const raw = this.getHintLabel(hint).toLowerCase();
            const search = this._model.toLowerCase();

            const hl = raw.replace(
                search,
                `<span style='font-weight: bold; color: #36a6f2;'>$&</span>`
            );

            return hl;
        },
        /**Функция получающая label для подсказки */
        getHintLabel(hint) {
            if (hint && this.fnHintLabel && typeof this.fnHintLabel === "function") {
                return this.fnHintLabel(hint);
            } else {
                return hint.label;
            }
        },
        /**Функция получающая count для подсказки */
        getHintCount(hint) {
            if (hint && this.fnHintCount && typeof this.fnHintCount === "function") {
                return this.fnHintCount(hint);
            } else {
                return hint.count;
            }
        },
        onHintClick(hint) {
            this.$emit("hint-click", hint);
            this.$emit("hints-open-change", false);
        },
        onCategoryClick() {
            this.$emit("category-open-change", true);
        },
        onClickOutside() {
            this.$emit("hints-open-change", false);
            this.$emit("category-open-change", false);
        },
        onSearch() {
            this.$emit("search", { value: this._model, byItems: Boolean(this.categories.current) });
        },
    },
    computed: {
        _model: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
                this.$emit("hints-open-change", true);

                if (this.categories.current) {
                    this.$emit("input-by-items");
                }
            },
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./InputSearchWithHints.scss";
</style>
