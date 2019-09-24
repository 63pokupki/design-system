# Наименование
  Для наименования используется методология [БЭМ](https://ru.bem.info/methodology/quick-start/), согласно которому интерфейс разбивается на независимые переиспользуемые блоки. Разработчики договорились использовать такой подход, когда блок явно будет использоваться в проекте неоднократно. **Прочитать обязательно**

#### Название блока и элемента должно характеризовать его смысл, а не внешний вид.

Правильно:
```html
<a class="btn"></a>
```
Неправильно:
```html
<a class="blue"></a>
```


#### При написании составных имен, используем дефис "-"
Имя блока задаёт пространство имен для содержащихся внутри него элементов.

```html
<div class="block-name"></div>
```

#### Имя элемента отделяется от имени блока двумя подчеркиваниями "__"

```html
<div class="block-name">
  <span class="block-name__element-name"></span>
</div>
```

#### Имя модификатора отделяется от имени блока или элемента одним подчеркиванием "_"

```html
<div class="block-name block-name_modificator-name">
  <span class="block-name__element-name"></span>
</div>
```

#### Пример вложенности элементов внутри блока

Правильно:

```html
<div class="block-name">
  <a class="block-name__link">
    <span class="block-name__span">
      <img class="block-name__image">
    </span>
  </a>
</div>
```
Неправильно:

```html
<div class="block-name">
  <a class="block-name__link">
    <span class="block-name__link__span">
      <img class="block-name__link__span__image">
    </span>
  </a>
</div>
```

#### Внутри блока могут находиться не только его элементы, но и другие блоки
```html
<div class="block-name">
  <a class="block-name__link">
    <span class="another-block-name">
      <img class="another-block-name__image">
    </span>
  </a>
</div>
```

#### Позиционирование элемента задаётся через присвоение класса в пределах имени родительского пространства.

Пример:
```html
<div class="block-name">
  <a class="block-name__link">
    <span class="another-block-name block-name__span">
      <img class="another-block-name__image">
    </span>
  </a>
</div>
```


### Состояние задаётся через добавление модификатора к основному классу

```html
<a class="link link_is-hidden"></a>
```

***

**Больше примеров смотри в руководстве по [БЭМ](https://ru.bem.info/methodology/quick-start/)**
