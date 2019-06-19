## Нейминг
  Для нейминга исползуется принцип [БЭМ](https://ru.bem.info/methodology/quick-start/#%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5), согласно которому интерфейс разбивается на независимые блоки. Разработчики договорились использовать такой подход, когда блок явно будет использоваться в проекте неоднократно.

### Название блока и элемента должно характеризовать его смысл, а не внешний вид.

Правильно:
```html
<a class="btn"></a>
```
Неправильно:
```html
<a class="blue"></a>
```

### Имя блока задаёт пространство имен для содержащихся внутри него элементов.


### При написании составных имен, используем стиль [lowerCamelCase](https://ru.wikipedia.org/wiki/CamelCase).

```html
<a class="filterTable"></a>
```

### Имя элемента отделяется от имени блока одним минусом **"-"**

```html
<a class="filterTable">
  <span class="filterTable-span"></span>
</a>
```

### Имя модификатора отделяется от имени блока или элемента одним подчеркиванием **"_"**

```html
<a class="filterTable">
  <span class="filterTable-span filterTable-span_primary"></span>
</a>
```
### Пример вложенности элементов внутри блока

Правильно:
```html
<a class="filterTable">
  <span class="filterTable-span">
    <img class="filterTable-image">
  </span>
</a>
```
Неправильно:
```html
<a class="filterTable">
  <span class="filterTable-span">
    <img class="filterTable-span-image">
  </span>
</a>
```

### Состояние задаётся через добавление класса с префиксом "is-"

```html
<a class="link is-hidden"></a>
```
