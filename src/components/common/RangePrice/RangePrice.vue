<template>
    <div class="spui-RangePrice">
        <div class="spui-RangePrice__inputs">
            <span @click.self="focusOnInput" class="spui-RangePrice__wrapper">
                <input
                    :style="`width: ${minWidthPx}`"
                    :value="rangeMin"
                    @change="onChangeMin"
                    @input="calcWidth"
                    @click="($event) => setSelection($event.target)"
                    class="spui-RangePrice__input"
                    type="text"
                />
                ₽
            </span>
            <span @click.self="focusOnInput" class="spui-RangePrice__wrapper">
                <input
                    :style="`width: ${maxWidthPx}`"
                    :value="rangeMax"
                    @change="onChangeMax"
                    @input="calcWidth"
                    @click="($event) => setSelection($event.target)"
                    class="spui-RangePrice__input"
                    type="text"
                />
                ₽
            </span>
        </div>
        <div class="spui-RangePrice__range">
            <vue-slider
                :min="min"
                :max="max"
                :dragOnClick="true"
                v-model="_value"
                :lazy="lazy"
                tooltip="none"
                :dotSize="16"
                :order="true"
                :duration="0.3"
                :enableCross="true"
                :height="'2px'"
            ></vue-slider>
        </div>
    </div>
</template>

<script>
import VueSlider from "vue-slider-component";

export default {
    name: "RangePrice",
    props: {
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 1000,
        },
        value: {
            type: Array,
            default: () => [0, 1000],
        },
        lazy: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        VueSlider,
    },
    computed: {
        _value: {
            get() {
                return this.value.sort((a, b) => a - b);
            },
            set(value) {
                this.$emit("input", value);
            },
        },
        rangeMin: {
            get() {
                if (this._value) {
                    return this._value[0];
                }

                return this.min;
            },
            set(value) {
                this._value = [value, this.rangeMax];
            },
        },
        rangeMax: {
            get() {
                if (this._value) {
                    return this._value[1];
                }

                return this.max;
            },
            set(value) {
                this._value = [this.rangeMin, value];
            },
        },
        minWidthPx() {
            const length = this.rangeMin.toString().split("").length;
            const width = Math.ceil(length * 10) + "px";
            return width;
        },
        maxWidthPx() {
            const length = this.rangeMax.toString().split("").length;
            const width = Math.ceil(length * 10) + "px";
            return width;
        },
    },
    methods: {
        calcWidth(e) {
            const el = e.target;
            const value = el.value;
            const length = value.toString().split("").length;
            const width = Math.ceil(length * 10) + "px";
            el.style.width = width;
        },
        setSelection(el) {
            el.setSelectionRange(0, el.value.length);
        },
        focusOnInput(e) {
            const input = e.target.querySelector("input");
            if (input) {
                input.focus();
                this.setSelection(input);
            }
        },
        onChangeMin(e) {
            let min = +e.target.value;

            if (min >= this.max) {
                min = this.max;
            }

            this.$emit("input", [min, this.rangeMax]);
        },
        onChangeMax(e) {
            let max = +e.target.value;

            if (max <= this.min) {
                max = this.min;
            }

            this.$emit("input", [this.rangeMin, max]);
        },
    },
};
</script>

<style lang="scss">
@import "./RangePrice.scss";
</style>
