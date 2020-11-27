import { mount, createLocalVue } from '@vue/test-utils';
import Checkbox from '@/components/common/Checkbox/Checkbox.vue';

/** Фабрика создания компонента */
const mountComponent = (context = {}) => {
    const localVue = createLocalVue();
    return mount(Checkbox, {
        ...context,
        localVue,
    });
};

describe('Checkbox.vue', () => {
    it('Инициализация', () => {
        const wrapper = mountComponent();
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Проверка стандартного состояния', () => {
        const wrapper = mountComponent({
            propsData: {
                id: 'id',
            },
        });

        expect(wrapper.find('input[type=checkbox]').element.checked).toBe(
            false,
        );
        expect(wrapper.vm.$data.uniqid).toBe('id');
        expect(wrapper.find('.spui-Checkbox__text').element).toBeUndefined();

        expect(wrapper.html()).toMatchSnapshot();
    });
});
