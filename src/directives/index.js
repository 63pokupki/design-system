/** Выполнение действия при клике вне элемента */
export const clickOutside = {
    bind (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            const target = event.target;

            if (!el.isEqualNode(target) && !el.contains(target)) {
                binding.value();
            }
        };
        document.addEventListener("click", el.clickOutsideEvent);
    },
    unbind (el) {
        document.removeEventListener("click", el.clickOutsideEvent);
    },
};
