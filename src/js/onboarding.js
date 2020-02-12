const introJs = require("intro.js");

const steps = [
    {
        intro: `<div class="onboarding-base-outer__content">
        <div class="onboarding-base-outer__heading">
            Привет!
        </div>
        <div class="onboarding-base-outer__heading">
            Это наша новая страница закупки.
        </div>
        <p class="onboarding-base-outer__accent">Что изменилось:</p>
        <ol>
            <li>Товары и описание закупки <b>теперь на одной странице</b></li>
            <li>Теперь <b>нет отдельного списка заказов</b> других участников. Такие товары отмечены синим значком и отображаются в начале каталога</li>
            <li><b>Ряды можно смотреть прямо в карточке товара</b>
                и делать сортировку по заполненности рядов</b></li>
        </ol>
        <p class="semi-bold">Хотите подробнее?</p> 
        </div>`,
        nextLabel: "Посмотреть"
        // tooltipClass: "onboarding-base-outer"
    },
    {
        intro: `Все товары закупки расположены сразу под ее описанием. Сначала идут те товары, которые уже заказаны в этом выкупе - на них стоит синий значок
        с количеством заказов.`,
        nextLabel: "Далее",
        element: document.querySelector(".stock-badge.stock-badge_already")
    },
    {
        intro: `В закупке можно отсортировать товары по популярности, цене, названию, новизне и заполненности рядов. 
        <br><br>
        Например, если отсортировать по заполненности рядов и выбрать в фильтре
         37 размер, то сверху будут товары,
        где 37 размер в ряду свободен, а сам ряд
        при этом максимально заполнен.`,
        element: document.querySelector(".ds-popover_sorting.ds-popover"),
        beforeStep: () => {
            try {
                let el = document.querySelector(
                    ".ds-popover_sorting.ds-popover"
                );
                el.classList.add("disable-transition");

                if (el) {
                    el.classList.add("is-visible");
                }
            } catch (e) {}
        }
    },
    {
        intro: `По умолчанию показываются товары из всех каталогов закупки. Если хотите выбрать определенный каталог - просто поставьте галочку рядом с ним!`,
        element: document.querySelector(".stock-d .stock-aside__catalogs")
    },
    {
        intro: `Описание закупки, условия и остальная информация - наверху страницы. Здесь же  Размерная сетка и Отзывы
        по закупке. Нажав “Показать больше”,
        вы раскроете полное описание закупки`,
        element: document.querySelector(".stock-d .stock-tabs__labels")
    },
    {
        intro: `Если возникают вопросы по товарам и условиям закупки - можно написать организатору или перейти к обсуждению закупки на форум.`,
        element: document.querySelector(
            ".stock-d .stock-brief__col.stock-brief__right"
        )
    },
    {
        intro: `Отобразите товары списком и смотрите более подробную информацию.
        В том числе заполненность ряда
        прямо в описании товара.`,
        element: document.querySelector(
            ".stock-d .stock-items-filter__mode .stock-items-filter__list"
        )
    },
    {
        intro: `Можно выбрать несколько 
        фильтров и после нажатия
        “Применить” останутся только
        подходящие товары!`,
        element: document.querySelector(".stock-d .stock-aside__filters")
    },
    {
        intro: `Чтобы находить товары быстрее, используйте поиск по закупке.`,
        element: document.querySelector(
            ".stock-d .search.stock-items-filter__search"
        )
    },
    {
        intro: `<div class="onboarding-base-outer__content">
        <div class="onboarding-base-outer__heading">
            Теперь вы знаете самое необходимое!
        </div>
        <p>Краткий видеообзор по новой странице закупки можно посмотреть <a target="_blank" href="#" class="link link_hover">здесь.</a></p>
        <span>Бежим заказывать!</span>
        </div>`,
        doneLabel: "Перейти к покупкам",
        // tooltipClass: "onboarding-base-outer",
        beforeStep: () => {
            fScrollTo();
        }
    }
];

const DEFAULT_OPTIONS = {
    // tooltipClass: "onboarding-base-steps",
    skipLabel: "Пропустить",
    doneLabel: "Закончить",
    prevLabel: "Назад",
    nextLabel: "Далее",
    hidePrev: true,
    hideNext: true,
    showProgress: true,
    showBullets: false,
    showStepNumbers: false,
    scrollTo: "tooltip"
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

    setTimeout(() => fScrollTo(), 500);
}

/**
 * Прокрутка
 * @param {Number} x - координата X прокрутки
 * @param {Number} y - координата Y прокрутки
 */
function fScrollTo(x = 0, y = 0) {
    try {
        const options = {
            top: x,
            left: y,
            behavior: "smooth"
        };
        window.scrollTo(options);
    } catch {
        window.scrollTo(x, y);
    }
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
    });
}

/**
 * Инициализация кнопки Закрыть
 * @param  {} onboarding - объект подсказок
 */
function fInitCloseButton(onboarding) {
    let el = document.querySelector(".introjs-tooltip");

    // создание иконки крестика
    let icon = document.createElement("i");
    icon.className = "ds-icon icon-close";

    // создание кнопки
    let close = document.createElement("button");
    close.append(icon);
    close.className = `introjs-tooltip__close`;
    close.addEventListener("click", () => onboarding.exit(true));

    // добавление кнопки
    if (el) {
        el.append(close);
    }
}
