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
        nextLabel: "Посмотреть",
        tooltipClass: "onboarding-template onboarding-template_start"
    },
    {
        intro: `Все товары закупки расположены сразу под ее описанием. Сначала идут те товары, которые уже заказаны в этом выкупе - на них стоит синий значок
        с количеством заказов.`,
        nextLabel: "Далее",
        element: document.querySelector('.stock-badge.stock-badge_already')
    },
    {
        intro: `В закупке можно отсортировать товары по популярности, цене, названию, новизне и заполненности рядов. 
        <br><br>
        Например, если отсортировать по заполненности рядов и выбрать в фильтре
         37 размер, то сверху будут товары,
        где 37 размер в ряду свободен, а сам ряд
        при этом максимально заполнен.`,
        element: document.querySelector('.ds-popover_sorting.ds-popover'),
        beforeStep: () => {
            let el = document.querySelector('.ds-popover_sorting.ds-popover');
            el.style.transition = 'none';
            
            if (el) {
                el.classList.add('is-visible')
            }
        }
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
    showStepNumbers: false,
    scrollTo: 'tooltip'
};

window.addEventListener("DOMContentLoaded", fMain);

/**
 * Инициализация логики
 */
function fMain() {
    let intro = introJs();

    fUpdatePropertiesStepByStepHook(intro, DEFAULT_OPTIONS, steps);

    intro.start();

    fInitCloseButton(intro);
}

/**
 * Обновление настроек под каждый шаг подсказок, смена текста, оформления и тд
 * @param  {} onboarding - объект подсказок
 * @param  {} default_options - стандартные настройки
 * @param  {} steps - объект шагов с нестандартными настройками
 */
function fUpdatePropertiesStepByStepHook(onboarding, default_options, steps) {
    // установка стандартных настроек
    onboarding.setOptions({
        ...default_options,
        steps
    });
    // установка настроек под каждый шаг
    onboarding.onbeforechange(() => {
        let step = steps[onboarding._currentStep];

        onboarding.setOptions({
            ...default_options,
            nextLabel: step.nextLabel || default_options.nextLabel,
            prevLabel: step.prevLabel || default_options.prevLabel,
            doneLabel: step.doneLabel || default_options.doneLabel,
            skipLabel: step.skipLabel || default_options.skipLabel,
            tooltipClass: step.tooltipClass || default_options.tooltipClass
        });

        if (step.beforeStep) {
            step.beforeStep();
            onboarding.refresh();
        }

        console.log("onbeforechange");
    });

    onboarding.onafterchange((item) => {
       console.log("onafterchange");
       onboarding.refresh();
       console.dir(item);
    });
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
