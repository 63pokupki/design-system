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

    it('Проверка стандартных входных параметров', () => {
        const wrapper = mountComponent();

        expect(wrapper.props()).toEqual({
            value: false,
            val: 'Значение не передано',
            id: '',
            onlyText: false,
            alignCenter: true,
            disabled: false,
            type: 'outline',
            rounded: false,
            position: 'left',
        });

        expect(wrapper.find('input[type=checkbox]').element.checked).toBe(
            false,
        );

        expect(wrapper.vm.$data.uniqid).not.toBeNull();

        expect(wrapper.find('.spui-Checkbox__text').element).toBeUndefined();

        expect(wrapper.classes('spui-Checkbox_disabled')).toBe(false);

        expect(wrapper.classes('spui-Checkbox_outline')).toBe(true);

        expect(wrapper.classes('spui-Checkbox_rounded')).toBe(false);

        expect(wrapper.classes('spui-Checkbox_left')).toBe(true);
    });
});
