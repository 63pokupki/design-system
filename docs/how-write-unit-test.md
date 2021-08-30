## Написание функциональных тестов

#### Что применяется
- Для функционального тестирования применяется **[jest](https://jestjs.io/docs/ru/getting-started)** и **[@vue/test-utils](https://vue-test-utils.vuejs.org/ru/)**

#### Как запустить
- Вручную тестирование можно запустить командой ```npm run unit```
Для включения hot-reload отслеживания команда ```npm run unit -- --watch```
Для обновления snapshot при их несовпадении команда```npm run unit -- -u```
Для обновления snapshot по маске названия файла ```npm run unit -- -u --паттерн_названия_файла```

#### Где должны лежать файлы тестов
Файл тестирования должен лежать в папке компонента и называться в формате ```[Компонент].spec.js```

#### В начале каждого теста
Импортировать необходимые функции и тестируемый компонент
```js
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Component from '@/Path/To/Component/Component.vue';
```
Написать функцию фабрику для компонента:
```js
const mountComponent = (context = {}) => {
    const localVue = createLocalVue();
    return mount(Component, {
        ...context,
        localVue,
    });
};
```

#### Что проверять

1. Что компонент инициализировался и существует
```js
it('Инициализация', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBeTruthy();
});

```
2. Проверить snapshot в стандартном состоянии
```js
it('Снимок без состояния', () => {
    const wrapper = mountComponent();

    expect(wrapper.html()).toMatchSnapshot();
});
```

3. Проверить snapshot'ы компонента с изменением всех props по отдельности
```js
it('Проверка изменения состояния example', () => {
    const wrapper = mountComponent({
        propsData: {
            example: 'example',
        },
    });

    expect(wrapper.html()).toMatchSnapshot();
});
```

4. Проверить пользовательский ввод и события - ввод текста, нажатия и тд
```js
it('Проверка неактивного состояния', () => {
    const fnMock = jest.fn();

    const wrapper = mountComponent({
        propsData: {
            isDisabled: true,
        },
        listeners: {
            click: fnMock,
        },
    });

    expect(wrapper.classes('is-disabled')).toBe(true);
    wrapper.trigger('click');
    expect(fnMock).not.toHaveBeenCalled();
    
    expect(wrapper.html()).toMatchSnapshot();
});
```