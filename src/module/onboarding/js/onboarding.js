const introJs = require("intro.js");

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

        if (!window.steps) {
            throw new Error("Шаги отсутствуют")
        }
        
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
            return window.steps.touch();
        } else {
            return window.steps.desctop();
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
