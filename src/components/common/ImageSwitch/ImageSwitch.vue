<template>
  <div
    :style="styleContainerObj"
    class="spui-ImageSwitch"
    :class="[_displayArrowsOnHoverOnlyС, _centeredС]"
  >
    <div class="spui-ImageSwitch__images">
      <slot
        v-if="$slots['before-images']"
        name="before-images"
      />
      <Carousel
        v-cloak
        v-if="_images"
        v-model="_currentSlideIndex"
        :min-swipe-distance="20"
        :per-page="1"
        :center-mode="centered"
        :scroll-per-page="true"
        :pagination-enabled="false"
        :loop="false"
        :touch-drag="true"
        :mouse-drag="true"
      >
        <Slide
          v-for="(image, i) in _images"
          :key="i"
          :data-index="i"
          :data-name="image"
          @slideclick="onImgClick"
        >
          <img
            v-lazy="{ src: getImgSrc(image), loading: loaderImgSrc }"
            :alt="getImgAlt(image)"
            :style="styleImgObj"
            class="spui-ImageSwitch__image"
          >
        </Slide>
      </Carousel>
      <slot
        v-if="$slots['after-images']"
        name="after-images"
      />
    </div>

    <button
      v-if="isArrowNavigationOn && !_isFirstSlide"
      aria-label="Предыдущее изображение"
      class="spui-ImageSwitch__prev"
      @click="onPrevBtnClick"
    >
      <div class="spui-ImageSwitch__btn-wrapper">
        <i class="ds-icon icon-arrow-left" />
      </div>
    </button>
    <button
      v-if="isArrowNavigationOn && !_isLastSlide"
      aria-label="Следующее изображение"
      class="spui-ImageSwitch__next"
      @click="onNextBtnClick"
    >
      <div class="spui-ImageSwitch__btn-wrapper">
        <i class="ds-icon icon-arrow-right" />
      </div>
    </button>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import lazyimg from "@/directives/lazy";

const loaderImgSrc = require("@/directives/lazy/image-loader.svg");

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
        fnImgAlt: {
            type: Function,
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
        loaderImgSrc: {
            default: loaderImgSrc,
        },
    },
    computed: {
        /** Массив изображений */
        _images() {
            const { images } = this;

            if (!images) return [];

            if (this.one) {
                return [images[0]];
            }

            return images;
        },
        /** Флаг нахождения на последнем изображении */
        _isLastSlide() {
            return this._currentSlideIndex === this._images.length - 1;
        },
        /** Флаг нахождения на первом изображении */
        _isFirstSlide() {
            return this._currentSlideIndex === 0;
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
            if (!value || !this.fnImgSrc || typeof this.fnImgSrc !== "function") return null;
            return this.fnImgSrc(value);
        },
        getImgAlt(value) {
            if (!value || !this.fnImgAlt || typeof this.fnImgAlt !== "function") return "Изображение";
            return this.fnImgAlt(value);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./ImageSwitch.scss";
</style>
