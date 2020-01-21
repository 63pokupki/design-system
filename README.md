[![NPM version](https://img.shields.io/npm/v/@63pokupki/design-system?color=green)](https://www.npmjs.com/package/@63pokupki/design-system) [![Build Status](https://travis-ci.com/63pokupki/design-system.svg?branch=master)](https://travis-ci.com/63pokupki/design-system) [![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/63pokupki/design-system?color=cadetblue)](https://github.com/63pokupki/design-system/pulls) [![GitHub contributors](https://img.shields.io/github/contributors/63pokupki/design-system?color=%23318cca)](https://github.com/63pokupki/design-system/graphs/contributors)

<p align="center">
  <a href="https://63pokupki.github.io/design-system/">
    <img src="logo.png"></img>
  </a>
</p>

<h2 align="center">Дизайн система компонентов 63 Pokupki</h2>
<br>

**[Просмотр в интерактивном режиме](https://63pokupki.github.io/design-system/)**

Установка:
```bash
npm i @63pokupki/design-system
```

Публикация:
```bash
npm version patch
npm publish --access public
```


## Введение
  Данная система разработана для организации и облегчения работы над проектом. 
  Она содержит в себе **набор переиспользуемых компонентов** в виде html заготовок и их стилей, которые удобно переиспользовать. По сути, это конструктор лего. Из маленьких общих блоков можно собрать более крупные блоки в едином стиле и структуре, без дублирования кода.

  Новый дизайн (страницы, компонента, блока, элемента) должен быть разбит на **отдельные общие независимые блоки**, которые надо поместить в этот проект в соответствующие разделы перед использованием на основном сайте.
  Далее на их основе делаются более крупные и специфичные блоки.

  Упор делается на **простоту, гибкость, независимость и переиспользуемость**.



## Содержание

1. [Правила наименования](./docs/naming.md)
1. [Стилизация](./docs/styling.md)
1. [Как пользоваться дизайн-системой](./docs/how.md)
1. [Как пользоваться шрифтовыми иконками](./docs/fonts-icons.md)
1. [Работа с svg-спрайтом](./docs/svg-sprite.md)
1. [Блок "Актуальное". Замена контента.](./docs/relevant-block.md)
1. [Замена баннеров во всплывающем меню.](./docs/menu-banners.md)
