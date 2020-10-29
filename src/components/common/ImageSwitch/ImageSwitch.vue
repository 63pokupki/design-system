<template>
    <div
        :style="styleContainerObj"
        :class="['spui-ImageSwitch', _displayArrowsOnHoverOnlyС, `spui-ImageSwitch_${position}`]"
    >
        <div class="spui-ImageSwitch__images">
            <slot v-if="$slots['before-images']" name="before-images"></slot>
            <Carousel
                @after-change="update"
                :dots="false"
                :infinite="false"
                :navButtons="false"
                :speed="200"
                :fade="true"
                ref="carousel"
            >
                <div
                    v-for="(image, i) in _images"
                    @click="() => onImgClick(image)"
                    :key="i"
                    :class="['spui-ImageSwitch__slide', { 'is-visible': _currentSlideIndex == i }]"
                >
                    <img
                        :style="styleImgObj"
                        class="spui-ImageSwitch__image"
                        v-lazy="{ src: getImgSrc(image), loading: loaderImgSrc }"
                    />
                </div>
            </Carousel>

            <button
                @click="onPrevBtnClick"
                v-show="isArrowNavigationOn && !_isFirstSlide"
                class="spui-ImageSwitch__prev"
            >
                <div class="spui-ImageSwitch__btn-wrapper">
                    <i class="ds-icon icon-arrow-left"></i>
                </div>
            </button>
            <button
                @click="onNextBtnClick"
                v-show="isArrowNavigationOn && !_isLastSlide"
                class="spui-ImageSwitch__next"
            >
                <div class="spui-ImageSwitch__btn-wrapper">
                    <i class="ds-icon icon-arrow-right"></i>
                </div>
            </button>

            <slot v-if="$slots['after-images']" name="after-images"></slot>
        </div>
    </div>
</template>

<script>
import VueAgile from "../../lib/Carousel/Agile";
import { lazyimg } from "@/directives/lazy";

export default {
    name: "ImageSwitch",
    components: {
        Carousel: VueAgile,
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
            default: true,
        },
        /** вертикальная позиция изображения в контейнере */
        position: {
            type: String,
            default: "center",
            validator: (value) => ["top", "center", "bottom"].includes(value),
        },
    },
    data() {
        return {
            loaderImgSrc: require("@/directives/lazy/image-loader.svg"),
        };
    },
    methods: {
        update(event) {
            this._currentSlideIndex = event.currentSlide;
        },
        onPrevBtnClick() {
            if (this._isFirstSlide) {
                return;
            }
            this._currentSlideIndex -= 1;
            this.$refs.carousel.goToPrev();
        },
        onNextBtnClick() {
            if (this._isLastSlide) {
                return;
            }
            this._currentSlideIndex += 1;
            this.$refs.carousel.goToNext();
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
        /** Флаг нахождения на последнем изображении */
        _isLastSlide() {
            return this._currentSlideIndex == this._images.length - 1;
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
