// Вспомогательные функции проекта (демонстрация интерактивности)
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
        link.addEventListener("click", () => list.classList.toggle("is-expanded"));
    });
}


// <!-- Модалка копирование позиции -->

//Раскрытие списка
let select = document.querySelectorAll(".modal__select"); //кнопка раскрывающая блок
//Перебираем все кнопки
for (let bt = 0; bt < select.length; bt++) {

    select[bt].addEventListener("click", function () {
        this.classList.toggle("is-toggle");
    });
}

//Выбор позиции
(
    () => {
        let selectCont = document.querySelectorAll(".modal__select");

        selectCont.forEach((sc) => {
            let sel_position = sc.querySelector(".modal__selected-position"),
                li = sc.querySelectorAll("li.item");

            li.forEach((i) => {
                i.addEventListener("click", () => {
                    sel_position.innerHTML = i.innerHTML;
                });
            });
        });
    }
)();




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
    plus = document.querySelector(".btn-sum__plus"),
    input = document.querySelector(".btn-sum__sum-num");

minus.addEventListener("click", () => {
    input.value--;
});
plus.addEventListener("click", () => {
    input.value++;
});



// <!-- Сердечко -->

let heart = document.querySelector(".icon-heart-bold");

let click_heart = () => {
    heart.classList.toggle("icon-heart-filled");
}

heart.addEventListener("click", click_heart);



const collapse_section = document.querySelectorAll(".collapse-section");
if (collapse_section) {
    collapse_section.forEach(section => {
        const heading = section.querySelector('.collapse-section__heading');
        heading.addEventListener("click", () => section.classList.toggle("is-expanded"));
    });
}