<template>
  <div
    class="spui-ScrollIntoElementButtons"
    :class="{ 'is-visible': visible }"
  >
    <button
      aria-label="Подняться наверх"
      class="spui-ScrollIntoElementButtons__up spui-ScrollIntoElementButtons__btn"
      @click="onTargetUpClick"
    >
      <i class="ds-icon icon-arrow-up" />
    </button>
    <button
      aria-label="Опуститься вниз"
      class="spui-ScrollIntoElementButtons__down spui-ScrollIntoElementButtons__btn"
      @click="onTargetDownClick"
    >
      <i class="ds-icon icon-arrow-down" />
    </button>
  </div>
</template>

<script>
export default {
    name: "ScrollIntoElementButtons",
    props: {
        "target-up-id": {
            type: String,
            required: true,
        },
        "target-down-id": {
            type: String,
            required: true,
        },
        fade: {
            type: Boolean,
            default: true,
        },
        "fade-time-ms": {
            type: Number,
            default: 3000,
        },
    },
    data() {
        return {
            targetUpEl: null,
            targetDownEl: null,
            timer: null,
            handler: null,
            visible: true,
        };
    },
    computed: {},
    mounted() {
        this.$nextTick(() => {
            const targetUpEl = document.getElementById(this.targetUpId);
            const targetDownEl = document.getElementById(this.targetDownId);

            if (targetUpEl && targetDownEl) {
                this.targetUpEl = targetUpEl;
                this.targetDownEl = targetDownEl;
            }

            if (this.fade) {
                this.visible = false;

                const handler = (e) => {
                    this.visible = true;
                    if (this.timer) {
                        clearTimeout(this.timer);
                        this.timer = null;
                    }
                    this.timer = setTimeout(() => {
                        this.visible = false;
                    }, this.fadeTimeMs);
                };

                this.handler = handler;

                document.addEventListener("scroll", this.handler, { passive: true });
            }
        });
    },
    beforeDestroy() {
        if (this.fade && this.handler) {
            document.removeEventListener("scroll", this.handler, { passive: true });
        }
    },
    methods: {
        onTargetUpClick() {
            if (this.targetUpEl) {
                this.targetUpEl.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                });
            }
        },
        onTargetDownClick() {
            if (this.targetDownEl) {
                this.targetDownEl.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./ScrollIntoElementButtons.scss";
</style>
