import { mount, createLocalVue } from '@vue/test-utils';
import Button from '@/components/common/Button/Button.vue';

/** Фабрика создания компонента */
const mountComponent = (context = {}) => {
    const localVue = createLocalVue();
    return mount(Button, {
        ...context,
        localVue,
    });
};

describe('Button.vue', () => {
    it('Инициализация', () => {
        const wrapper = mountComponent();
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Снимок без состояния', () => {
        const wrapper = mountComponent();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Проверка изменения типа', () => {
        const wrapper = mountComponent({
            propsData: {
                type: 'outlined',
            },
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Проверка иконки', () => {
        const wrapper = mountComponent({
            propsData: {
                iconName: 'icon-cart',
                iconPosition: 'left',
            },
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Проверка блочной модели', () => {
        const wrapper = mountComponent({
            propsData: {
                block: true,
            },
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Проверка стандартного слота', () => {
        const wrapper = mountComponent({
            slots: {
                default: 'Другой текст кнопки',
            },
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Проверка неактивного состояния', () => {
        const fnMock = jest.fn();

        const wrapperDisabled = mountComponent({
            propsData: {
                isDisabled: true,
            },
            listeners: {
                click: fnMock,
            },
        });

        expect(wrapperDisabled.classes('is-disabled')).toBe(true);
        wrapperDisabled.trigger('click');
        expect(fnMock).not.toHaveBeenCalled();
        expect(wrapperDisabled.html()).toMatchSnapshot();

        const fnMock2 = jest.fn();

        const wrapperActive = mountComponent({
            propsData: {
                isDisabled: false,
            },
            listeners: {
                click: fnMock2,
            },
        });

        expect(wrapperActive.classes('is-disabled')).toBe(false);
        wrapperActive.trigger('click');
        expect(fnMock2).toHaveBeenCalled();
        expect(wrapperActive.html()).toMatchSnapshot();
    });

    it('Проверка состояния загрузки', () => {
        const fnMock = jest.fn();

        const wrapperDisabled = mountComponent({
            propsData: {
                isLoading: true,
            },
            listeners: {
                click: fnMock,
            },
        });

        expect(wrapperDisabled.classes('is-loading')).toBe(true);
        wrapperDisabled.trigger('click');
        expect(fnMock).not.toHaveBeenCalled();
        expect(wrapperDisabled.html()).toMatchSnapshot();

        const fnMock2 = jest.fn();

        const wrapperActive = mountComponent({
            propsData: {
                isLoading: false,
            },
            listeners: {
                click: fnMock2,
            },
        });

        expect(wrapperActive.classes('is-loading')).toBe(false);
        wrapperActive.trigger('click');
        expect(fnMock2).toHaveBeenCalled();
        expect(wrapperActive.html()).toMatchSnapshot();
    });
});
