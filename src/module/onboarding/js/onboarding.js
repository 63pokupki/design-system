const introJs = require("intro.js");

const steps = {
    touch: () => [
        {
            intro: `<div class="onboarding-content">
                <div class="onboarding-heading">
                Привет! Это наша новая страница закупки.
                </div>
                <p class="onboarding-accent">Что изменилось:</p>
                <ol>
                    <li>Товары и описание закупки теперь на одной странице</li>
                    <li>Теперь нет отдельного списка заказов других участников. Такие товары отмечены синим значком и отображаются в начале каталога</li>
                    <li style="margin-right: 50px">Ряды можно смотреть прямо в карточке товара
                        и делать сортировку по заполненности рядов</li>
                </ol>
                <p class="semi-bold">Хотите подробнее?</p>
            </div>`,
            nextLabel: "Посмотреть",
            tooltipClass: "onboarding-base-outer"
        },
        {
            intro: `Здесь вся информация
            о закупке, Размерная сетка,
            а также Отзывы.`,
            element: getElement(
                ".stock-m-info__section-collapse, .stock-m-info__tabs"
            )
        },
        {
            intro: `Можно задать вопрос
            организатору или перейти
            к обсуждению закупки на форум.`,
            element: getElement(".stock-m-info__buttons")
        },
        {
            intro: `По умолчанию показаны
            товары из всех каталогов.
            Отметьте нужные каталоги.`,
            element: getElement(".stock-m-control__catalogs-btn")
        },
        {
            intro: `Поиск по закупке поможет
            находить товары быстрее.`,
            element: getElement(
                ".stock-m-control__search-m, .stock-m-control__search-t"
            )
        },
        {
            intro: `Отобразите товары по одному
            и смотрите заполнение ряда
            прямо в описании товара.`,
            element: getElement(".stock-m-control__filter-buttons")
        },
        {
            intro: `Выберите нужный размер и
            сортируйте по заполненности рядов.
            Сверху будут подходящие товары.`,
            element: getElement(".stock-m__filters")
        },
        {
            intro: `<div class="onboarding-content" style="font-size: 14px; margin-bottom: 15px">
            <div class="onboarding-heading">
                Теперь вы знаете самое необходимое!
            </div>
            <p>Краткий видеообзор по новой странице закупки можно посмотреть <a target="_blank" href="#" class="link link_hover">здесь.</a></p>
            <span>Бежим заказывать!</span>
            </div>`,
            doneLabel: "Перейти к покупкам",
            beforeStep: () => {
                fScrollTo();
            }
        }
    ],
    desctop: () => [
        {
            intro: `<div class="onboarding-content">
            <div class="onboarding-heading">
                Привет!
            </div>
            <div class="onboarding-heading">
                Это наша новая страница закупки.
            </div>
            <p class="onboarding-accent">Что изменилось:</p>
            <ol>
                <li>Товары и описание закупки <b>теперь на одной странице</b></li>
                <li>Теперь <b>нет отдельного списка заказов</b> других участников. Такие товары отмечены синим значком и отображаются в начале каталога</li>
                <li><b>Ряды можно смотреть прямо в карточке товара</b>
                    и делать сортировку по заполненности рядов</b></li>
            </ol>
            <p class="semi-bold">Хотите подробнее?</p>
            </div>`,
            nextLabel: "Посмотреть",
            tooltipClass: "onboarding-base-outer"
        },
        {
            intro: `Все товары закупки расположены сразу под ее описанием. Сначала идут те товары, которые уже заказаны в этом выкупе - на них стоит синий значок
            с количеством заказов.`,
            nextLabel: "Далее",
            element: getElement(".stock-badge.stock-badge_already")
        },
        {
            intro: `В закупке можно отсортировать товары по популярности, цене, названию, новизне и заполненности рядов.
            <br><br>
            Например, если отсортировать по заполненности рядов и выбрать в фильтре
             37 размер, то сверху будут товары,
            где 37 размер в ряду свободен, а сам ряд
            при этом максимально заполнен.`,
            element: getElement(".ds-popover_sorting.ds-popover"),
            beforeStep: () => {
                try {
                    let el = getElement(".ds-popover_sorting.ds-popover");

                    el.classList.add("disable-transition");

                    if (el) {
                        el.classList.add("is-visible");
                    }
                } catch (e) {}
            }
        },
        {
            intro: `По умолчанию показываются товары из всех каталогов закупки. Если хотите выбрать определенный каталог - просто поставьте галочку рядом с ним!`,
            element: getElement(".stock-d .stock-aside__catalogs")
        },
        {
            intro: `Описание закупки, условия и остальная информация - наверху страницы. Здесь же  Размерная сетка и Отзывы
            по закупке. Нажав “Показать больше”,
            вы раскроете полное описание закупки`,
            element: getElement(".stock-d .stock-tabs__labels")
        },
        {
            intro: `Если возникают вопросы по товарам и условиям закупки - можно написать организатору или перейти к обсуждению закупки на форум.`,
            element: getElement(".stock-d .stock-brief__col.stock-brief__right")
        },
        {
            intro: `Отобразите товары списком и смотрите более подробную информацию.
            В том числе заполненность ряда
            прямо в описании товара.`,
            element: getElement(".stock-d .stock-items-filter__list")
        },
        {
            intro: `Можно выбрать несколько
            фильтров и после нажатия
            “Применить” останутся только
            подходящие товары!`,
            element: getElement(".stock-d .stock-aside__filters")
        },
        {
            intro: `Чтобы находить товары быстрее, используйте поиск по закупке.`,
            element: getElement(".stock-d .search.stock-items-filter__search")
        },
        {
            intro: `<div class="onboarding-content">
            <div class="onboarding-heading">
                Теперь вы знаете самое необходимое!
            </div>
            <p>Краткий видеообзор по новой странице закупки можно посмотреть <a target="_blank" href="#" class="link link_hover">здесь.</a></p>
            <span>Бежим заказывать!</span>
            </div>`,
            doneLabel: "Перейти к покупкам",
            tooltipClass: "onboarding-base-outer",
            beforeStep: () => {
                fScrollTo();
            }
        }
    ]
};

const DEFAULT_OPTIONS = {
    tooltipClass: "onboarding-base-steps",
    skipLabel: "Пропустить",
    doneLabel: "Закончить",
    prevLabel: "Назад",
    nextLabel: "Далее",
    hidePrev: true,
    hideNext: true,
    showProgress: true,
    showBullets: false,
    showStepNumbers: false,
    scrollTo: "tooltip",
    disableInteraction: true,
    exitOnOverlayClick: false
};

const touchpoint = 768;

window.addEventListener("DOMContentLoaded", fMain);

/**
 * Инициализация логики
 */
function fMain() {
    try {
        let intro = introJs();
        const steps = _getStepsByMediaMode(touchpoint);

        intro = fUpdatePropertiesStepByStepHook(intro, DEFAULT_OPTIONS, steps);

        intro.start();

        fInitCloseButton(intro);

        setTimeout(() => fScrollTo(), 500);
    } catch (e) {
        console.error(e);
    }
}

/**
 * Определение режима показа - мобильные/десктоп
 */
function _getStepsByMediaMode(media) {
    try {
        const w = document.documentElement.clientWidth;

        if (w <= media) {
            return steps.touch();
        } else {
            return steps.desctop();
        }
    } catch (e) {
        console.error(e);
    }
}

/**
 * Проверка видимости (существования) элемента
 * @param {} element - элемент
 */
function _isElementExist(element) {
    try {
        if (!element) {
            throw new Error("Элемент не передан");
        }

        const { height, width } = element.getBoundingClientRect();

        if (height !== 0 && width !== 0) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.error(e);
    }
}

/**
 * Получение видимого элемента по css селектору
 * @param {String} selector - css валидный селектор
 */
function getElement(selector) {
    try {
        if (!selector) {
            throw new Error("Селектор не передан");
        }

        const elements = Array.prototype.slice.call(
            document.querySelectorAll(selector)
        );

        const visibleElement = elements.find(el => _isElementExist(el));

        if (!visibleElement) {
            throw new Error("Видимый элемент не найден");
        }

        return visibleElement;
    } catch (e) {
        console.error(e);
    }
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
    try {
        // установка стандартных настроек
        onboarding.setOptions({
            ...default_options,
            steps
        });

        // переопределение настроек под каждый шаг
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

        return onboarding;
    } catch (e) {
        console.error(e);
    }
}

/**
 * Инициализация кнопки Закрыть
 * @param  {} onboarding - объект подсказок
 */
function fInitCloseButton(onboarding) {
    try {
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
    } catch (e) {
        console.error(e);
    }
}
