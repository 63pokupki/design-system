/* eslint-disable prefer-rest-params */
/** Выбирает слово для числа в правильной форме */
export const pluralize = (number, words) => words[
// eslint-disable-next-line eqeqeq
// eslint-disable-next-line no-nested-ternary
    number % 10 === 1 && number % 100 !== 11
        ? 0
        : number % 10 >= 2 &&
              number % 10 <= 4 &&
              (number % 100 < 10 || number % 100 >= 20)
            ? 1
            : 2
];

/** Возвращает строку с заглавной буквой */
export const capitalize = (str) => {
    if (!str || typeof str !== 'string') return null;
    return str[0].toUpperCase() + str.slice(1);
};

/** Функция задержки исполнения целевой функции */
export function throttle(func, ms) {
    let isThrottled = false;
    let savedArgs;
    let savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedThis = null;
                savedArgs = null;
            }
        }, ms);
    }

    return wrapper;
}
