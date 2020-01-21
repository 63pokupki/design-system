# Замена баннеров-тегов в меню

![alt-текст](https://github.com/63pokupki/design-system/blob/design-system_Ivan/src/images/banner-tags/banner-menu.png)

- В редакторе кода открыть проект с дизайн системой;
- перейти в ветку **master** **git checkout master**;
- обновить её **git pull**;
- создать ветку **git branch "имя ветки"** под задачу и перейти в неё **git checkout "имя вашей ветки"** или работать в своей **git checkout "имя вашей ветки"**;
- переходим в папку **banners-tags** (design-system/src/images/banner-tags/);
- меням необходимое изображение. Если требуется оставить старое, переименовываем его, приписав к имени (old).
- запускаем ДС **npm run live**
- проверям всё ли правильно, перейдя в http://ваш localhost/categories-tags.html
- индексируем **git add .**;
- коммитим **git commit -m "Замена баннеров-тегов в меню"**;
- пушим **git push**
- перходим в  [репозиторий](https://github.com/63pokupki/design-system/branches);
- делаем **New pull request**;
- обновляем у себя ветку **master** **git pull**

#### Обновляем NPM

- открываем редактор кода;
- переходим в ветку **master**;
- **вы дролжны быть залогинены в NPM**;
- выполняем команды:
- npm run dist;
- git add .
- коммитим git commit -m "Комментарий"
- npm run publish:patch
- на своей ветке поменять версию ДС в package.json ("version": "0.0.117");
- переходим в консоль, выполняем **npm i**
- улыбаемся и машем.