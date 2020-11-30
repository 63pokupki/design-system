import { mount, createLocalVue } from '@vue/test-utils';
import BtnFavorite from './BtnFavorite.vue';

/** Фабрика создания компонента */
const mountComponent = (context = {}) => {
    const localVue = createLocalVue();
    return mount(BtnFavorite, {
        ...context,
        localVue,
    });
};

describe('BtnFavorite.vue', () => {
    it('Инициализация', () => {
        const wrapper = mountComponent();

        expect(wrapper.exists()).toBeTruthy();
    });

    it('Снимок стандартного состояния', () => {
        const wrapper = mountComponent();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Проверка состояния активности', () => {
        const wrapper = mountComponent({
            propsData: { isActive: true },
        });

        expect(wrapper.classes('is-active')).toBe(true);
        expect(wrapper.find('i').classes('icon-heart-filled')).toBe(true);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Проверка состояния загрузки', () => {
        const wrapper = mountComponent({
            propsData: { isLoading: true },
        });

        expect(wrapper.classes('is-loading')).toBe(true);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Обработка нажатия', () => {
        const fnMock = jest.fn();

        const wrapper = mountComponent({
            listeners: {
                click: fnMock,
            },
        });

        wrapper.trigger('click');

        expect(fnMock).toBeCalled();
    });
});
