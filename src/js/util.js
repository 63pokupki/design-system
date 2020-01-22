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

//Модалки

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

btn_sum.forEach(m => {
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

//Закрытие картинок в модалке "Сообщение организатору"
(()=> {
    let modal_msg_org = document.querySelectorAll(".modal-message-for-org");
    if (modal_msg_org) {
        modal_msg_org.forEach((mso)=>{
           let close_btn = mso.querySelectorAll(".img-container_small");
           close_btn.forEach((cb)=> {
               cb.addEventListener("click", ()=> {
                    cb.parentNode.removeChild(cb);
               });
           }); 
        })
    }
})()


// <!-- Сердечко -->

let hearts = document.querySelectorAll(".icon-heart-bold");

if (hearts) {
    hearts.forEach((heart) => {
        heart.addEventListener('click', () => {
            heart.classList.toggle("icon-heart-filled");
        })
    })
}


//Разворачивающийся блок
(() => {
    let toggleBlock = document.querySelectorAll(".collapse-block");

    if (toggleBlock) {
        toggleBlock.forEach(t => {
            t.addEventListener("click", ()=> {
                t.classList.toggle("is-toggle");
            })
        });
    }
})();

//Сворачивание доставки в мобилке
(() => {
    let dcw = document.querySelectorAll(".delivery__mobile");

    if (dcw) {
        dcw.forEach(d => {
            let btn_tog = d.querySelector("#btn-toggle-wrap");

            if (btn_tog) {
                btn_tog.addEventListener("click", () => {
                    d.classList.toggle("is-toggle");
                });
            }
        });
    }
})();

//Сворачивание карточки города в блоке - доставка курьером (в мобилке) (например карточка "Самара")
(() => {
    let dc = document.querySelectorAll(".delivery__city");

    if (dc) {
        dc.forEach(d => {
            let btn_toggle_city = d.querySelector(".delivery__city-header");

            if (btn_toggle_city) {
                btn_toggle_city.addEventListener("click", () => {
                    d.classList.toggle("is-toggle");
                });
            }
        });
    }
})();

const sidebar_array = document.querySelectorAll(".sidebar");

sidebar_array.forEach(sidebar => {
    const sidebar_back = sidebar.querySelector(".sidebar__background");
    const sidebar_close = sidebar.querySelector(".sidebar__close");

    sidebar_back.addEventListener("click", function() {
        sidebar.classList.toggle("sidebar_is-active");
    });

    sidebar_close.addEventListener("click", function() {
        sidebar.classList.toggle("sidebar_is-active");
    });
});

//Карточки активных закупок

(() => {
    let cardActive = document.querySelectorAll(".card-active-custom");

    if (cardActive) {
        cardActive.forEach(c => {
            let btnToggle = c.querySelectorAll(".arrow");

            if (btnToggle) {
                btnToggle.forEach(bt => {
                    bt.addEventListener("click", () => {
                        c.classList.toggle("is-toggle");
                    });
                });
            }
        });
    }
})();

//Закрытие модалки
(() => {
    let modal = document.querySelectorAll(".modal");

    if (modal) {
        modal.forEach(m => {
            let modal_bg = m.querySelector(".modal__bg"),
                btn_close = m.querySelector(".modal__btn-close");

            if (modal_bg) {
                modal_bg.addEventListener("click", () => {
                    m.classList.remove("is-visible");
                });
            }
            if (btn_close) {
                btn_close.addEventListener("click", () => {
                    m.classList.remove("is-visible");
                });
            }
        });
    }
})();

// Сворачивание/разворачивание всех карточек на странице
(() => {
    let switcher__label = document.querySelectorAll(".switcher__label");
    if (switcher__label) {        
        switcher__label.forEach(sl => {
            sl.addEventListener("click", () => {
                

                let card = document.querySelectorAll(".card-active-custom");
                if (card) {
                    card.forEach(c => {
                        c.classList.toggle("is-toggle");
                    });
                }
            });
        });
    }
})();



// Окно авторизации(переключение вкладок)
(()=> {
    let auth_wrap = document.querySelectorAll(".auth-form");

    if (auth_wrap) {
        auth_wrap.forEach((aw)=> {
            let auth_tabs = aw.querySelector("#auth-tabs");
            

            auth_tabs.addEventListener("click", ()=> {
                if (auth_tabs.checked === true) {
                    aw.classList.toggle("auth-form_sign-up");
                    aw.querySelector(".auth-form__form-sign-up").style.display = "flex";
                    aw.querySelector(".auth-form__form-sign-in").style.display = "none";
                }
                else {
                    aw.classList.remove("auth-form_sign-up");
                    aw.querySelector(".auth-form__form-sign-up").style.display = "none";
                    aw.querySelector(".auth-form__form-sign-in").style.display = "flex";
                }
                
            });  
           
        });
    }


})();
    

// кнопка назад
document.addEventListener("DOMContentLoaded", () => {
    const el = document.createElement("div");
    el.setAttribute("class", "ds-home");
    el.addEventListener("click", go_home);
    document.body.appendChild(el);

    function go_home() {
        const host = window.location.host;
        const origin = window.location.origin;
        let path;

        if (host.includes("github")) {
            path = `${origin}/design-system/`;
        } else {
            path = `${origin}`;
        }

        window.location.href = path;
    }
});

// Забыли пароль?
(()=> {
    let af = document.querySelectorAll(".auth-form");

    if (af) {
        af.forEach((a)=> {
            let btn_link      = a.querySelector(".auth-form__link-to-recovery-password"),
                form_signUp   = a.querySelector(".auth-form__form-sign-in"),
                form_recovery = a.querySelector(".auth-form__form-password-recovery");
    
            btn_link.addEventListener("click",(bl)=> {
                bl.preventDefault();
                form_signUp.style.display   = "none";
                form_recovery.style.display = "block";
            });
    
        });
    }
})();



