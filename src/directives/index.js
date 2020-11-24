/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/** Выполнение действия при клике вне элемента */
export const clickOutside = {
    bind(el, binding) {
        el.clickOutsideEvent = function clickOutsideEvent(event) {
            const { target } = event;

            if (!el.isEqualNode(target) && !el.contains(target)) {
                binding.value();
            }
        };
        document.addEventListener('click', el.clickOutsideEvent);
    },
    unbind(el) {
        document.removeEventListener('click', el.clickOutsideEvent);
    },
};
