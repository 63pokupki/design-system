/**Выбирает слово для числа в правильной форме */
export const pluralize = (number, words) => {
    return words[
        number % 10 == 1 && number % 100 != 11
            ? 0
            : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)
            ? 1
            : 2
    ];
};

/** Возвращает строку с заглавной буквой */
export const capitalize = (str) => {
    if (!str || typeof str !== "string") return;
    return str[0].toUpperCase() + str.slice(1);
};

/**Функция задержки исполнения целевой функции */
export function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}
