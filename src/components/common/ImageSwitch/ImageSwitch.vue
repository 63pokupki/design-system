<template>
    <div
        :style="styleContainerObj"
        class="spui-ImageSwitch"
        :class="[_displayArrowsOnHoverOnlyС, _centeredС]"
    >
        <div class="spui-ImageSwitch__images">
            <slot v-if="$slots['before-images']" name="before-images"></slot>
            <Carousel
                v-cloak
                v-if="_images"
                v-model="_currentSlideIndex"
                :minSwipeDistance="15"
                :perPage="1"
                :centerMode="centered"
                :scrollPerPage="true"
                :navigationEnabled="false"
                :paginationEnabled="false"
                :loop="false"
                :touchDrag="_isSlideModeOn"
                :mouseDrag="_isSlideModeOn"
            >
                <Slide
                    v-cloak
                    :data-index="i"
                    :data-name="image"
                    v-for="(image, i) in _images"
                    :key="i"
                >
                    <img
                        :style="styleImgObj"
                        @click="() => onImgClick(image)"
                        class="spui-ImageSwitch__image"
                        v-lazy="{ src: getImgSrc(image), loading: loading }"
                    />
                </Slide>
            </Carousel>
            <slot v-if="$slots['after-images']" name="after-images"></slot>
        </div>

        <button
            @click="onPrevBtnClick"
            v-if="_isArrowNavigationOn && !_isFirstSlide"
            class="spui-ImageSwitch__prev"
        >
            <div class="spui-ImageSwitch__btn-wrapper">
                <i class="ds-icon icon-arrow-left"></i>
            </div>
        </button>
        <button
            @click="onNextBtnClick"
            v-if="_isArrowNavigationOn && !_isLastSlide"
            class="spui-ImageSwitch__next"
        >
            <div class="spui-ImageSwitch__btn-wrapper">
                <i class="ds-icon icon-arrow-right"></i>
            </div>
        </button>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { lazyimg } from "@/directives/lazy";

export default {
    name: "ImageSwitch",
    components: {
        Carousel,
        Slide,
    },
    directives: {
        lazy: lazyimg,
    },
    props: {
        styleImgObj: {
            type: Object,
            default: () => ({}),
        },
        styleContainerObj: {
            type: Object,
            default: () => ({}),
        },
        images: {
            type: Array,
            required: true,
        },
        fnImgSrc: {
            type: Function,
            required: true,
        },
        value: {
            type: Number,
            default: 0,
        },
        one: {
            type: Boolean,
            default: false,
        },
        isArrowNavigationOn: {
            type: Boolean,
            default: true,
        },
        displayArrowsOnHoverOnly: {
            type: Boolean,
            default: false,
        },
        centered: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            loading: require("@/directives/lazy/image-loader.svg"),
        };
    },
    methods: {
        onPrevBtnClick() {
            if (this._isFirstSlide) {
                return;
            }
            this._currentSlideIndex -= 1;
        },
        onNextBtnClick() {
            if (this._isLastSlide) {
                return;
            }
            this._currentSlideIndex += 1;
        },
        onImgClick(img) {
            this.$emit("click", img);
        },
        getImgSrc(value) {
            if (!value || !this.fnImgSrc || typeof this.fnImgSrc !== "function") return;
            return this.fnImgSrc(value);
        },
    },
    computed: {
        /** Массив изображений */
        _images() {
            const images = this.images;

            if (!images) return [];

            if (this.one) {
                return [images[0]];
            }

            return images;
        },
        /** Длина массива изображений */
        _length() {
            return this._images.length;
        },
        /** Режим пролистывания */
        _isSlideModeOn() {
            return this._length > 1 && !this.one ? true : false;
        },
        /** Показывать стрелки или нет */
        _isArrowNavigationOn() {
            return this._isSlideModeOn && this.isArrowNavigationOn;
        },
        /** Флаг нахождения на последнем изображении */
        _isLastSlide() {
            return this._currentSlideIndex == this._length - 1;
        },
        /** Флаг нахождения на первом изображении */
        _isFirstSlide() {
            return this._currentSlideIndex == 0;
        },
        /** Индекс текущего слайда */
        _currentSlideIndex: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
        /* Стилевые классы */
        _displayArrowsOnHoverOnlyС() {
            return this.displayArrowsOnHoverOnly
                ? "spui-ImageSwitch_display-arrows-on-hover"
                : null;
        },
        _centeredС() {
            return this.centered ? "spui-ImageSwitch_centered" : null;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./ImageSwitch.scss";
</style>

<style lang="scss">
[v-cloak] {
    display: none;
}
</style>
