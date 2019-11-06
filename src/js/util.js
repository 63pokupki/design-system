// Вспомогательные функции проекта (демонстрация интерактивности)

// открытие полной инфы о закупке
window.addEventListener("DOMContentLoaded", () => {
    const disable_transition = document.querySelector(".disable-transition");
    if (disable_transition) {
        disable_transition.classList.toggle("disable-transition");
    }
});

//Переиспользуемые функции

//Функция закрытия
// clickElem - элемент по которому кликают
// eventElem - элемент на котором происходит событие
function elem_close(clickElem, eventElem) {
    for (let i = 0; i < clickElem.length; i++) {
        for (let p = 0; p < eventElem.length; p++) {
            clickElem[p].addEventListener("click", function () {
                console.log("Click");
                eventElem[p].classList.remove("is-visible");
            });

        }
    }
}

// eventPar   - элемент-родитель для остальных элементов
// clickElem  - элемент по которому кликают
// eventElem  - элемент на котором происходит событие
// eventClass - присваиваемый класс
// function event_func(eventPar, clickElem, eventElem, eventClass) {
//     eventPar.forEach((e) => {
//         let clickElem  = e.querySelector(clickElem),
//             eventElem  = e.querySelector(eventElem);

//         if (clickElem && eventElem) {
//             clickElem.addEventListener("click", () => {
//                 eventElem.classList.toggle(eventClass);
//             });
//         }
//     });
// }


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

//Модалки


// <!-- Модалка копирование позиции -->

//Раскрытие списка
let select = document.querySelectorAll(".modal__select"); //кнопка раскрывающая блок
//Перебираем все кнопки
if (select) {
    for (let bt = 0; bt < select.length; bt++) {
        select[bt].addEventListener("click", function () {
            this.classList.toggle("is-toggle");
        });
    }
}

//Выбор позиции

let selectCont = document.querySelectorAll(".modal__select");
if (selectCont) {
    selectCont.forEach(sc => {
        let sel_position = sc.querySelector(".modal__selected-position"),
            li = sc.querySelectorAll("li");

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
let btn_sum = document.querySelectorAll(".btn-sum");


btn_sum.forEach((m) => {
    let plus = m.querySelector(".btn-sum__plus"),
        minus = m.querySelector(".btn-sum__minus"),
        input = m.querySelector(".btn-sum__sum-num");

    if (plus && minus && input) {
        plus.addEventListener("click", () => {
            input.value++;
        });
        minus.addEventListener("click", () => {
            input.value--;
        });
    }
});




// <!-- Сердечко -->

let heart = document.querySelector(".icon-heart-bold");

if (heart) {
    let click_heart = () => {
        heart.classList.toggle("icon-heart-filled");
    };

    heart.addEventListener("click", click_heart);
}



//Разворачивающийся блок

let toggleBlock = document.querySelectorAll(".collapse-block");

if (toggleBlock) {
    toggleBlock.forEach((t) => {
        let btn_toggle = t.querySelector(".arrow");

        btn_toggle.addEventListener("click", () => {
            
            t.classList.toggle("is-toggle");
        });
    });
}

//Сворачивание доставки в мобилке
(() => {
    let dcw = document.querySelectorAll(".delivery__mobile");

    if (dcw) {
        dcw.forEach((d) => {
            let btn_tog    = d.querySelector("#btn-toggle-wrap");

            if (btn_tog) {
                btn_tog.addEventListener("click", () => {
                    d.classList.toggle("is-toggle");
                });
            }
        });
    }

})();

//Сворачивание доставки курьером в мобилке
(() => {
    let dc = document.querySelectorAll(".delivery__city");

    if (dc) {
        dc.forEach((d) => {
            let btn_toggle_city = d.querySelector(".arrow");
            
            if (btn_toggle_city) {
                btn_toggle_city.addEventListener("click", () => {
                    d.classList.toggle("is-toggle");
                });
            }
        });

    }
})();

//Сворачивание городов в доставке курьером в мобилке
(()=> {
    let d_courier = document.querySelectorAll(".delivery__courier");
    if (d_courier) {
        d_courier.forEach((dc)=> {
           let btn_toggle_courier = dc.querySelector("#btn-toggle-d_courier"),
               block_city         = document.querySelectorAll(".delivery__city"); 


           if (btn_toggle_courier && block_city) {
               btn_toggle_courier.addEventListener("click", ()=> {
                   block_city.forEach((bc)=> {
                        bc.classList.toggle("is-visible");
                   });
                    
               });
           }
            
        });
    }
})();




const sidebar_array = document.querySelectorAll(".sidebar");

sidebar_array.forEach(sidebar => {
    const sidebar_back = sidebar.querySelector(".sidebar__background");
    const sidebar_close = sidebar.querySelector(".sidebar__close");

    sidebar_back.addEventListener("click", function () {
        sidebar.classList.toggle("sidebar_is-active");
    });

    sidebar_close.addEventListener("click", function () {
        sidebar.classList.toggle("sidebar_is-active");
    });

});

//Карточки активных закупок

(() => {
    let cardActive = document.querySelectorAll(".card-active-custom");

    if (cardActive) {
        cardActive.forEach((c) => {
            let btnToggle = c.querySelectorAll(".arrow");

            if (btnToggle) {
                btnToggle.forEach((bt) => {
                    bt.addEventListener("click", () => {
                        c.classList.toggle("is-toggle");
                    });
                });
            }
        });
    }
})();

//Закрытие модалки
//Этот скрипт ломает выполнение других. Новые скрипты лучше добавлять пред ним.
//п.с. потом исправлю 
let modal_bg = document.querySelectorAll(".modal__bg"),
    btn_close = document.querySelectorAll(".modal__btn-close"),
    modal = document.querySelectorAll(".modal");

if (modal_bg && btn_close && modal) {

    elem_close(modal_bg, modal);
    elem_close(btn_close, modal);
}