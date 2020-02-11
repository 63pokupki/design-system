# Замена баннеров-тегов в меню

![alt-текст](https://github.com/63pokupki/design-system/blob/design-system_Ivan/src/images/banner-tags/banner-menu.png)

- В редакторе кода открыть проект с дизайн системой;
- перейти в ветку master **git checkout master**;
- обновить её **git pull**;
- создать ветку **git branch "имя ветки"** под задачу и перейти в неё **git checkout "имя вашей ветки"** или работать в своей **git checkout "имя вашей ветки"**;
- переходим в папку **banners-tags** (design-system/src/images/banner-tags/);
- меням необходимое изображение. Если требуется оставить старое, переименовываем его, приписав к имени (default).
- запускаем ДС **npm run live**
- проверям всё ли правильно, перейдя в http://ваш localhost/categories-tags.html
- индексируем **git add .**;
- коммитим **git commit -m "Замена баннеров-тегов в меню"**;
- пушим **git push**
- перходим в  [репозиторий](https://github.com/63pokupki/design-system/branches);
- делаем **New pull request**;
- обновляем у себя ветку **master** **git pull**
- обновляем  **NPM**

#### Меняем ссылки к тегам:

##### SP проект

- Переходим в **sp проект**, делаем **git pull** в ветке dev
- Создаём ветку с таким же названием(от ТЗ) от dev-ветки
- **ctr+p** ищем **main_overall_header.html****
- **ctr+f** ищем класс **categories-tags**
- меняем ссылку /forum/phpBB3/app.php/purchases?purchaseOfTheDay=1" class="categories-tags__link", именно в таком же формате /forum/phpBB3/app.php/purchases?purchaseOfTheDay=1
- **git add .**
- **git commit -m "Edit links categories-tags"**
- **git push;**
- В консоли появится ссылка на гитлаб или гитхаб;
- Переходим по ссылке или в уже открытом гитлабе/гитхабе делаем Merge Request  
- Переходим на ветку dev и делаем **git pull**, чтобы обновить свою локальную ветку dev

##### core-static

- Переходим в core-static
- Ищем **header.hbs**
- **Ctrl+F** ищем **categories-tags__link**
- меняем необходимую ссылку "/forum/phpBB3/app.php/purchases?filter_womens_day=1"
- как правило, меняется только часть после вопросительного знака, в нашем случае filter_womens_day=1
- **git add .**
- **git commit -m "Edit links categories-tags"**
- **git push;**
- В консоли появится ссылка на гитлаб или гитхаб;
- Переходим по ссылке или в уже открытом гитлабе/гитхабе делаем Merge Request  
- Переходим на ветку dev и делаем **git pull**, чтобы обновить свою локальную ветку dev

#### Обновляем NPM

- открываем редактор кода;
- переходим в ветку **master**;
- **вы дролжны быть залогинены в NPM**;
- выполняем команды:
- **npm run dist**;
- **git add .**
- коммитим **git commit -m "Комментарий"**
- **npm run publish:patch**
- в консоли высветится актуальная версия ДС вида - 0.0.118;
- на своей ветке меняем версию ДС на новую в package.json ("version": "0.0.117");
- переходим в консоль, выполняем **npm i**
- улыбаемся и машем.