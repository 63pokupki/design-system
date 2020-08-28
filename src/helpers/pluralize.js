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
