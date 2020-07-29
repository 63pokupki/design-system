import Example from './Example.vue';

export default {
  title: 'Компоненты/Пример',
  component: Example,
};

export const Normal = () => ({
  render: (h) => <Example>Пример компонента</Example>,
});

Normal.story = {
  name: 'Пример компонента',
};
