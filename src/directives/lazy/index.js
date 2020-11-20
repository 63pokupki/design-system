import Vue from "vue";
import Lazy from "./lazy";

const LazyC = Lazy(Vue);

const lazy = new LazyC({
    preLoad: 1,
    throttleWait: 500,
});

export default {
    bind: lazy.add.bind(lazy),
    update: lazy.update.bind(lazy),
    componentUpdated: lazy.lazyLoadHandler.bind(lazy),
    unbind: lazy.remove.bind(lazy),
};
