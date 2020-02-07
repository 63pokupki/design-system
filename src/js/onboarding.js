const introJs = require("intro.js");

const steps = [
    {
        intro: `<div class="onboarding-template__content">
        <div class="onboarding-template__heading">
            Привет!
        </div>
        <div class="onboarding-template__heading">
            Это наша новая страница закупки.
        </div>
        <p class="onboarding-template__accent">Что изменилось:</p>
        <ol class="onboarding-template__list">
            <li>Товары и описание закупки <b>теперь на одной странице</b></li>
            <li>Теперь <b>нет отдельного списка заказов</b> других участников. Такие товары отмечены синим значком и отображаются в начале каталога</li>
            <li><b>Ряды можно смотреть прямо в карточке товара</b>
                и делать сортировку по заполненности рядов</b></li>
        </ol>
        <p class="semi-bold">Хотите подробнее?</p>
        </div>`,
        nextLabel: "Посмотреть22",
        tooltipClass: "onboarding-template onboarding-template_start"
    },
    {
        intro: `Все товары закупки расположены сразу под ее описанием. Сначала идут те товары, которые уже заказаны в этом выкупе - на них стоит синий значок
        с количеством заказов.`,
        nextLabel: "Далее"
    },
    {
        intro: `В закупке можно отсортировать товары  по популярности, цене, названию, новизне и заполненности рядов. 
        <br><br>
        Например, если отсортировать по заполненности рядов и выбрать в фильтре
         37 размер, то сверху будут товары,
        где 37 размер в ряду свободен, а сам ряд
        при этом максимально заполнен.`
    },
    {
        intro: `В закупке можно отсортировать товары  по популярности, цене, названию, новизне и заполненности рядов. 
        <br><br>
        Например, если отсортировать по заполненности рядов и выбрать в фильтре
         37 размер, то сверху будут товары,
        где 37 размер в ряду свободен, а сам ряд
        при этом максимально заполнен.`
    },
];

const DEFAULT_OPTIONS = {
    highlightClass: "onboarding-template-hightlight",
    tooltipClass: "onboarding-template",
    skipLabel: "Пропустить",
    doneLabel: "Закончить",
    prevLabel: "Назад",
    nextLabel: "Далее",
    hidePrev: true,
    hideNext: true,
    showProgress: true,
    showBullets: false,
    showStepNumbers: false
};

window.addEventListener("DOMContentLoaded", fMain);

/**
 * Инициализация логики
 */
function fMain() {
    let intro = introJs();
    window.intro = intro;

    // переопределения для некоторых шагов
    intro.onbeforechange(function()  {
        
        switch (this._currentStep) {
            case 0:
                this.setOptions({
                    ...DEFAULT_OPTIONS,
                    nextLabel: steps[intro._currentStep].nextLabel,
                    tooltipClass: steps[intro._currentStep].tooltipClass
                });
                break;

            default:
                this.setOptions({
                    ...DEFAULT_OPTIONS,
                    nextLabel: steps[intro._currentStep].nextLabel || DEFAULT_OPTIONS.nextLabel
                });
                break;
        }
    });

    intro.setOptions({
        ...DEFAULT_OPTIONS,
        steps
    });

    intro.start();

    fInitCloseButton(intro);
}

/**
 * Инициализация кнопки Закрыть
 * @param  {} onboarding - объект подсказок
 */
function fInitCloseButton(onboarding) {
    let el = document.querySelector("." + DEFAULT_OPTIONS.tooltipClass);

    // создание иконки крестика
    let icon = document.createElement("i");
    icon.className = "ds-icon icon-close";

    // создание кнопки
    let close = document.createElement("button");
    close.append(icon);
    close.className = `${DEFAULT_OPTIONS.tooltipClass}__close`;
    close.addEventListener("click", () => onboarding.exit(true));

    // добавление кнопки
    if (el) {
        el.append(close);
    }
}

fMain();
