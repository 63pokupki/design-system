<template>
  <div class="spui-RangePrice">
    <div class="spui-RangePrice__inputs">
      <span
        class="spui-RangePrice__wrapper"
        @click.self="focusOnInput"
      >
        <label :for="uuid1">
          <input
            :id="uuid1"
            :style="`width: ${minWidthPx}`"
            :value="rangeMin"
            class="spui-RangePrice__input"
            type="text"
            @change="onChangeMin"
            @input="calcWidth"
            @click="($event) => setSelection($event.target)"
          >
          ₽
        </label>
      </span>
      <span
        class="spui-RangePrice__wrapper"
        @click.self="focusOnInput"
      >
        <label :for="uuid2">
          <input
            :id="uuid2"
            :style="`width: ${maxWidthPx}`"
            :value="rangeMax"
            class="spui-RangePrice__input"
            type="text"
            @change="onChangeMax"
            @input="calcWidth"
            @click="($event) => setSelection($event.target)"
          >
          ₽
        </label>
      </span>
    </div>
    <div class="spui-RangePrice__range">
      <vue-slider
        v-model="_value"
        :min="min"
        :max="max"
        :drag-on-click="true"
        :lazy="lazy"
        tooltip="none"
        :dot-size="16"
        :order="true"
        :duration="0.3"
        :enable-cross="true"
        :height="'2px'"
      />
    </div>
  </div>
</template>

<script>
import uuid from "short-uuid";
import VueSlider from "vue-slider-component";

export default {
    name: "RangePrice",
    components: {
        VueSlider,
    },
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
    data() {
        return {
            uuid1: null,
            uuid2: null,
        };
    },
    computed: {
        _value: {
            get() {
                return [...this.value].sort((a, b) => a - b);
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
            const width = `${Math.ceil(length * 10)}px`;
            return width;
        },
        maxWidthPx() {
            const length = this.rangeMax.toString().split("").length;
            const width = `${Math.ceil(length * 10)}px`;
            return width;
        },
    },
    mounted() {
        this.uuid1 = uuid.generate();
        this.uuid2 = uuid.generate();
    },
    methods: {
        calcWidth(e) {
            const el = e.target;
            const value = el.value;
            const length = value.toString().split("").length;
            const width = `${Math.ceil(length * 10)}px`;
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
