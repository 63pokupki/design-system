/* eslint-disable */
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
    stock_full.forEach((stock) => {
        const stock_full_wrapper = stock.querySelector(".stock-full__wrapper");
        const link_open = stock.querySelector(".stock-full__expand");
        link_open.addEventListener("click", () =>
            stock_full_wrapper.classList.toggle("is-expanded")
        );
    });
}

const stock_dropdown_filter = document.querySelectorAll(".stock-dropdown-filter");
if (stock_dropdown_filter) {
    stock_dropdown_filter.forEach((filter) => {
        const heading = filter.querySelector(".stock-dropdown-filter__head");
        heading.addEventListener("click", () => filter.classList.toggle("is-expanded"));
    });
}

const item_params_list__items = document.querySelectorAll(".item-params-list__item");
if (item_params_list__items) {
    item_params_list__items.forEach((item) => {
        item.addEventListener("click", () => item.classList.toggle("is-selected"));
    });
}

const item_params_list = document.querySelectorAll(".item-params-list");
if (item_params_list__items) {
    item_params_list.forEach((list) => {
        const link = list.nextElementSibling;
        if (link) {
            link.addEventListener("click", () => list.classList.toggle("is-expanded"));
        }
    });
}

const collapse_section = document.querySelectorAll(".collapse-section");
if (collapse_section) {
    collapse_section.forEach((section) => {
        const heading = section.querySelector(".collapse-section__heading");
        heading.addEventListener("click", () => section.classList.toggle("is-expanded"));
    });
}

// Модалки

// <!-- Модалка копирование позиции -->

// Раскрытие списка
const select = document.querySelectorAll(".modal__select"); // кнопка раскрывающая блок
// Перебираем все кнопки
if (select) {
    for (let bt = 0; bt < select.length; bt++) {
        select[bt].addEventListener("click", function () {
            this.classList.toggle("is-toggle");
        });
    }
}

// Выбор позиции

const selectCont = document.querySelectorAll(".modal__select");
if (selectCont) {
    selectCont.forEach((sc) => {
        const sel_position = sc.querySelector(".modal__selected-position");
        const li = sc.querySelectorAll("li");

        li.forEach((i) => {
            i.addEventListener("click", () => {
                sel_position.innerHTML = i.innerHTML;
            });
        });
    });
}

// <!-- Карточка товара с коротким изображением -->

const btn_toggle = document.querySelector(".modal__btn-about-goods");
const toggle_txt_container = document.querySelector(".modal__goods-info");

if (btn_toggle) {
    btn_toggle.addEventListener("click", () => {
        toggle_txt_container.classList.toggle("is-toggle");
    });
}

// <!-- Кнопки управления количеством товара -->
const btn_sum = document.querySelectorAll(".btn-sum");

btn_sum.forEach((m) => {
    const plus = m.querySelector(".btn-sum__plus");
    const minus = m.querySelector(".btn-sum__minus");
    const input = m.querySelector(".btn-sum__sum-num");

    if (plus && minus && input) {
        plus.addEventListener("click", () => {
            input.value++;
        });
        minus.addEventListener("click", () => {
            input.value--;
        });
    }
});

// Закрытие картинок в модалке "Сообщение организатору"
(() => {
    const modal_msg_org = document.querySelectorAll(".modal-message-for-org");
    if (modal_msg_org) {
        modal_msg_org.forEach((mso) => {
            const close_btn = mso.querySelectorAll(".img-container_small");
            close_btn.forEach((cb) => {
                cb.addEventListener("click", () => {
                    cb.parentNode.removeChild(cb);
                });
            });
        });
    }
})();

// <!-- Сердечко -->

const hearts = document.querySelectorAll(".icon-heart-bold");

if (hearts) {
    hearts.forEach((heart) => {
        heart.addEventListener("click", () => {
            heart.classList.toggle("icon-heart-filled");
        });
    });
}

// Разворачивающийся блок
(() => {
    const toggleBlock = document.querySelectorAll(".collapse-block");

    if (toggleBlock) {
        toggleBlock.forEach((t) => {
            const toggleBtn = t.querySelector(".collapse-block__header");
            toggleBtn.addEventListener("click", () => {
                t.classList.toggle("is-toggle");
            });
        });
    }
})();

// Сворачивание доставки в мобилке
(() => {
    const dcw = document.querySelectorAll(".delivery__mobile");

    if (dcw) {
        dcw.forEach((d) => {
            const btn_tog = d.querySelector("#btn-toggle-wrap");

            if (btn_tog) {
                btn_tog.addEventListener("click", () => {
                    d.classList.toggle("is-toggle");
                });
            }
        });
    }
})();

// Сворачивание карточки города в блоке - доставка курьером (в мобилке) (например карточка "Самара")
(() => {
    const dc = document.querySelectorAll(".delivery__city");

    if (dc) {
        dc.forEach((d) => {
            const btn_toggle_city = d.querySelector(".delivery__city-header");

            if (btn_toggle_city) {
                btn_toggle_city.addEventListener("click", () => {
                    d.classList.toggle("is-toggle");
                });
            }
        });
    }
})();

const sidebar_array = document.querySelectorAll(".sidebar");

sidebar_array.forEach((sidebar) => {
    const sidebar_back = sidebar.querySelector(".sidebar__background");
    const sidebar_close = sidebar.querySelector(".sidebar__close");

    sidebar_back.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar_is-active");
    });

    sidebar_close.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar_is-active");
    });
});

// Карточки активных закупок

(() => {
    const cardActive = document.querySelectorAll(".card-active-custom");

    if (cardActive) {
        cardActive.forEach((c) => {
            c.addEventListener("click", () => {
                c.classList.toggle("is-toggle");
            });
        });
    }
})();

// Закрытие модалки
(() => {
    const modal = document.querySelectorAll(".modal");

    if (modal) {
        modal.forEach((m) => {
            const modal_bg = m.querySelector(".modal__bg");
            const btn_close = m.querySelector(".modal__btn-close");

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
    const switcher__label = document.querySelectorAll(".switcher__label");
    if (switcher__label) {
        switcher__label.forEach((sl) => {
            sl.addEventListener("click", () => {
                const card = document.querySelectorAll(".card-active-custom");
                if (card) {
                    card.forEach((c) => {
                        c.classList.toggle("is-toggle");
                    });
                }
            });
        });
    }
})();

// Окно авторизации(переключение вкладок)
(() => {
    const auth_wrap = document.querySelectorAll(".auth-form");

    if (auth_wrap) {
        auth_wrap.forEach((aw) => {
            const auth_tabs = aw.querySelector("#auth-tabs");

            auth_tabs.addEventListener("click", () => {
                if (auth_tabs.checked === true) {
                    aw.classList.toggle("auth-form_sign-up");
                    aw.querySelector(".auth-form__form-sign-up").style.display = "flex";
                    aw.querySelector(".auth-form__form-sign-in").style.display = "none";
                } else {
                    aw.classList.remove("auth-form_sign-up");
                    aw.querySelector(".auth-form__form-sign-up").style.display = "none";
                    aw.querySelector(".auth-form__form-sign-in").style.display = "flex";
                }
            });
        });
    }
})();

// кнопка назад
// document.addEventListener("DOMContentLoaded", () => {
//     const el = document.createElement("div");
//     el.setAttribute("class", "ds-home");
//     el.addEventListener("click", go_home);
//     document.body.appendChild(el);

//     function go_home() {
//         const host = window.location.host;
//         const origin = window.location.origin;
//         let path;

//         if (host.includes("github")) {
//             path = `${origin}/design-system/`;
//         } else {
//             path = `${origin}`;
//         }

//         window.location.href = path;
//     }
// });

// Забыли пароль?
(() => {
    const af = document.querySelectorAll(".auth-form");

    if (af) {
        af.forEach((a) => {
            const btn_link = a.querySelector(".auth-form__link-to-recovery-password");
            const form_signUp = a.querySelector(".auth-form__form-sign-in");
            const form_recovery = a.querySelector(".auth-form__form-password-recovery");

            btn_link.addEventListener("click", (bl) => {
                bl.preventDefault();
                form_signUp.style.display = "none";
                form_recovery.style.display = "block";
            });
        });
    }
})();

// ПАнель с каталогами для орга
const modalListCat = document.querySelectorAll(".modal-list-catalogs");

if (modalListCat) {
    modalListCat.forEach((mlc) => {
        const content = mlc.querySelector(".modal-container__wrap");
        const catalogs = mlc.querySelector(".modal-container__catalogs");
        const positions = mlc.querySelector(".modal-container__positions");
        const toggleLinkPos = mlc.querySelector(".modal-list-catalogs__selected-position-link");
        const toggleLinkCat = mlc.querySelector(".modal-list-catalogs__selected-catalogs-link");
        const toggleBtnPos = mlc.querySelector(".modal-container__btn-position");
        const toggleBtnCat = mlc.querySelector(".modal-container__btn-catalogs");
        const toggleBtn = mlc.querySelector(".modal-container__footer-btn-toggle");
        if (
            content &&
            toggleBtn &&
            toggleLinkPos &&
            toggleLinkCat &&
            toggleBtnCat &&
            toggleBtnPos &&
            catalogs &&
            positions
        ) {
            toggleBtn.addEventListener("click", () => {
                content.classList.toggle("is-toggle");
                console.log("Click");
            });
            toggleLinkPos.addEventListener("click", () => {
                content.classList.toggle("is-toggle");
            });
            toggleLinkCat.addEventListener("click", () => {
                content.classList.toggle("is-toggle");
            });
            toggleBtnPos.addEventListener("click", () => {
                positions.classList.toggle("is-toggle");
            });
            toggleBtnCat.addEventListener("click", () => {
                catalogs.classList.toggle("is-toggle");
            });
        }
    });
}

// stock-desctop-org-ver вызов панели орга
const pageStockOrg = document.querySelectorAll(".stock-d__main");

if (pageStockOrg) {
    pageStockOrg.forEach((pso) => {
        const checkbox = pso.querySelectorAll(".checkbox__input");
        const goTo = pso.querySelector(".ds-btn_hover");
        const panel = pso.querySelector(".modal-list-catalogs");

        if (checkbox) {
            checkbox.forEach((chx) => {
                chx.addEventListener("click", () => {
                    console.log("Click");
                    if (panel) {
                        panel.classList.toggle("is-visible");
                    }
                });
            });
        }
        if (goTo) {
            goTo.addEventListener("click", () => {
                panel.classList.toggle("is-visible");
            });
        }
    });
}

try {
    // Timer reverse
    const startTime = moment([2020, 1, 19]); // Дата начала
    const endTime = moment([2020, 2, 17]); // Дата окончания

    const t = endTime.diff(startTime, "days"); // РАзница между начальной и конечной датой
    document.querySelector(".timer-reverse__time").innerHTML = t;
    document.querySelector("#daysView").innerHTML = t;

    const btnLook = document.querySelector(".promo-for-begginners__btn-look");
    if (btnLook) {
        btnLook.addEventListener("click", () => {
            document.querySelector(".promo-for-begginners").classList.toggle("is-view");
        });
    }
} catch {}

const inputPhone = document.querySelectorAll("#ds-inputs-form__phone");

if (inputPhone) {
    inputPhone.forEach((ip) => {
        ip.addEventListener("keyup", function () {
            this.value = this.value.replace(/[^\d]/g, "");
        });
    });
}

// Изменение цвета и размера шрифта копеек
(() => {
    const price = document.querySelectorAll(".price");

    if (price) {
        price.forEach((p) => {
            const inputInteger = p.querySelector(".price__input-integer");
            const rub = p.querySelector(".price__rub");
            const kopek = p.querySelector(".price__kopek");

            // Получаем содержимое элемента в виде строки
            const txtInIn = inputInteger.innerText.toString();

            // Получаем размер шрифта kopekSize
            // let kopekSize = window.getComputedStyle(czk).fontSize;

            // Получаем последние три символа
            const lastChars = txtInIn.slice(-3);
            console.log(lastChars);
            // Получаем целое число, до запятой
            const rubInteger = txtInIn.slice(0, -3);

            // Записываем изменённые значения в элементы на странице
            rub.innerHTML = rubInteger;
            kopek.innerHTML = lastChars;
        });
    } else {
        console.error(
            "Нет элемента с классом .color-size-kopek. Присвойте класс необходимому элементу"
        );
    }
})();

// Ограничение текста и добавление трёх точек в конце
function charactersLimit(selector, numberOfChar) {
    const element = document.querySelectorAll(selector);
    if (element) {
        element.forEach((e) => {
            // Получаем содержимое элемента
            const inputTxt = e.textContent;
            // При помощи trim() удаляем пробелы вначале и вконце строки
            // Отображаем строку от первого символа до указанного в numberOfChar
            const shortTxt = inputTxt.trim().substring(0, numberOfChar);
            // ЗАменяем старое содержимое на новое
            e.innerText = `${shortTxt}...`;
            console.log(`${shortTxt}...`);
        });
    }
}
// ограничение символов у названия товара в корзине
charactersLimit(".cart__item-title", 55);
// ограничение символов у названия закупки в корзине
charactersLimit(".cart__purhase-heading", 83);

const stockMItems = document.querySelectorAll(".item-page-m");

if (stockMItems) {
    stockMItems.forEach((smi) => {
        console.dir(smi);

        const rowsWrapper = smi.querySelector(".stock-rows__values");
        const help = smi.querySelector(".stock-rows-help");

        if (rowsWrapper.scrollWidth <= rowsWrapper.clientWidth) {
            help.style.display = "none";
        } else {
            help.style.display = "flex";
        }
    });
}

// Окно подтверждения пароля
(() => {
    const confMail = document.querySelectorAll(".modal-confirm-mail");

    if (confMail) {
        confMail.forEach((cm) => {
            const input = cm.querySelector(".modal-confirm-mail__input");
            input.addEventListener("keyup", () => {
                if (input.value != "") {
                    cm.classList.add("is-active");
                } else {
                    cm.classList.remove("is-active");
                }
            });
        });
    }
})();
