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

    it('Снимок без состояния', () => {
        const wrapper = mountComponent();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Проверка изменения входных параметров и вида компонента', () => {
        const wrapper = mountComponent({
            propsData: { isActive: true, isLoading: true },
        });

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
