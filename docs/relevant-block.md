# Блок актуальное

- В редакторе кода открываем проект, где лежит блок актуальное (sp-frontend);
- обновляем dev ветку **git pull**;
- создаём свою ветку;
- Переходим в неё **git checkout "имя ветки"**;
- открываем поиск по файлу **("Ctrl+P")** и ищем файл Relevant.vue. Путь к файлу(sp-frontend/src/  pages/main/components/Relevant.vue);
- Найти участок кода "export default" **(Ctrl+F)**;

#### Редактируем контент

- Заменяем изображения. Копируем новые изображения к себе в локальный репозиторий : /sp-frontend/src/common/images/relevant/r-block). Старые изображения **УДАЛЯЕМ**;
- Далее в строках:
```javascript 
      ..*import image_1 from "images/relevant/hat-main.jpg";
	  ..*import image_2 from "images/relevant/bag.jpg";
	  ..*import image_3 from "images/relevant/brooch.jpg";
	  ..*import image_4 from "images/relevant/belt.png";
	  ..*import image_5 from "images/relevant/gloves.jpg";
```
      меняем имена изображений на имена вновь загруженные;
- Меням заголовок в **heading**: "Уютная осень";
- Меням текст и ссылки на странице
```javascript
	  **text_1**: "Постельное белье",
      **link_1**: "";
```
- Проверяем: **npm run deploy_local** (http://dev.63pokupki.ru/forum/phpBB3/app.php/main);
- Если всё правильно, индексируем **git add .**;
- Коммитим: **git commit -m "Обновление блока актуальное"**;
- Пушим **git push**;
- В консоли появится ссылка на гитлаб;
- Переходим по ссылке или в уже открытом гитлабе/гитхабе делаем **Merge Request**;
