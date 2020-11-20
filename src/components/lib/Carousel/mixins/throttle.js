/**
 * Throttle methods by lodash
 */

import throttle from "lodash-es/throttle";

const mixin = {
    created() {
        this.goTo = throttle(this.goTo, this.throttleDelay);
        this.getWidth = throttle(this.getWidth, 250);
    },
};

export default mixin;
