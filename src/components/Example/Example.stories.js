import Example from "./Example.vue";

export default {
  title: "Компоненты/Пример",
  component: Example,
};

export const withText = () => ({
  components: { Example },
  template: "<Example>Пример компонента</Example>",
});

export const Normal = () => ({
  render: (h) => <Example>Пример компонента</Example>,
});

Normal.story = {
  name: "Пример компонента",
};
