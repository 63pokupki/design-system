/* eslint-disable import/no-extraneous-dependencies */
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';

/** Фабрика создания mount компонента */
export const getMountComponentWrapper = (component, mountContext = {}) => {
    const localVue = createLocalVue();
    return mount(component, {
        ...mountContext,
        localVue,
    });
};

/** Фабрика создания shallowMount компонента */
export const getShallowMountComponentWrapper = (
    component,
    shallowMountContext = {},
) => {
    const localVue = createLocalVue();
    return shallowMount(component, {
        ...shallowMountContext,
        localVue,
    });
};
