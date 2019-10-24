// Вспомогательные функции проекта (демонстрация интерактивности)

// открытие полной инфы о закупке
window.addEventListener("DOMContentLoaded", () => {
    const disable_transition = document.querySelector(".disable-transition");
    if (disable_transition) {
        disable_transition.classList.toggle("disable-transition");
    }
});

// открытие полной инфы о закупке
const stock_full = document.querySelectorAll(".stock-full");
if (stock_full) {
    stock_full.forEach(stock => {
        const stock_full_wrapper = stock.querySelector(".stock-full__wrapper");
        const link_open = stock.querySelector(".stock-full__expand");
        link_open.addEventListener("click", () => stock_full_wrapper.classList.toggle("is-expanded"));
    });
}

const stock_dropdown_filter = document.querySelectorAll(".stock-dropdown-filter");
if (stock_dropdown_filter) {
    stock_dropdown_filter.forEach(filter => {
        const heading = filter.querySelector(".stock-dropdown-filter__head");
        heading.addEventListener("click", () => filter.classList.toggle("is-expanded"));
    });
}

const item_params_list__items = document.querySelectorAll(".item-params-list__item");
if (item_params_list__items) {
    item_params_list__items.forEach(item => {
        item.addEventListener("click", () => item.classList.toggle("is-selected"));
    });
}

const item_params_list = document.querySelectorAll(".item-params-list");
if (item_params_list__items) {
    item_params_list.forEach(list => {
        const link = list.nextElementSibling;
        if (link) {
            link.addEventListener("click", () => list.classList.toggle("is-expanded"));
        }
    });
}

const collapse_section = document.querySelectorAll(".collapse-section");
if (collapse_section) {
    collapse_section.forEach(section => {
        const heading = section.querySelector(".collapse-section__heading");
        heading.addEventListener("click", () => section.classList.toggle("is-expanded"));
    });
}

// <!-- Модалка копирование позиции -->

//Раскрытие списка
let select = document.querySelectorAll(".modal__select"); //кнопка раскрывающая блок
//Перебираем все кнопки
if (select) {
    for (let bt = 0; bt < select.length; bt++) {
        select[bt].addEventListener("click", function() {
            this.classList.toggle("is-toggle");
        });
    }
}

//Выбор позиции

let selectCont = document.querySelectorAll(".modal__select");
if (selectCont) {
    selectCont.forEach(sc => {
        let sel_position = sc.querySelector(".modal__selected-position"),
            li = sc.querySelectorAll("li.item");

        li.forEach(i => {
            i.addEventListener("click", () => {
                sel_position.innerHTML = i.innerHTML;
            });
        });
    });
}


// <!-- Карточка товара с коротким изображением -->

let btn_toggle = document.querySelector(".modal__btn-about-goods"),
    toggle_txt_container = document.querySelector(".modal__goods-info");

if (btn_toggle) {
    btn_toggle.addEventListener("click", () => {
        toggle_txt_container.classList.toggle("is-toggle");
    });
}
    


// <!-- Кнопки управления количеством товара -->

    let minus = document.querySelector(".btn-sum__minus"),
        plus  = document.querySelector(".btn-sum__plus"),
        input = document.querySelector(".btn-sum__sum-num");
    
    if (minus) {
        minus.addEventListener("click", () => {
            input.value--;
        });
    }
    if (plus) {
        plus.addEventListener("click", () => {
            input.value++;
        });
    }


// <!-- Сердечко -->

let heart = document.querySelector(".icon-heart-bold");

if (heart) {
    let click_heart = () => {
        heart.classList.toggle("icon-heart-filled");
    };

    heart.addEventListener("click", click_heart);
}

//Карточки активных закупок
(() => {
    let btn    = document.querySelectorAll(".btn-toggle-wrap"),
        togl   = document.querySelectorAll(".card-active-custom__wrap");
    
    if (btn && togl) {
        for (let i = 0; i < btn.length; i++) {
            for (let t = 0; t < togl.length; t++) {
                btn[t].addEventListener("click", () => {
                    togl[t].classList.toggle("is-toggle");
                });
            }
        }        
    } else {
        console.log("ЧТо то пошло не так");
    }
})()

//Модалки
let modal_bg  = document.querySelectorAll(".modal__bg"),
    btn_close = document.querySelectorAll(".modal__btn-close"),
    modal     = document.querySelectorAll(".modal");

if (modal_bg && btn_close && modal) {
        
    // clickElem - элемент по которому кликают
    // eventElem - элемент на котором происходит событие
    function modal_close(clickElem, eventElem) {
        for (let i = 0; i < clickElem.length; i++) {
            for (let p = 0; p < eventElem.length; p++) {
                clickElem[p].addEventListener("click", function() {
                    console.log("Click");
                    eventElem[p].classList.remove("is-visible");
                });
    
            } 
        }
        
    }
    modal_close(modal_bg, modal);
    modal_close(btn_close, modal);
}
