<template>
  <div>
    <h1>Это пример страницы на vue</h1>
    <Example>Это кастомный тестовый компонент</Example>
  </div>
</template>

<script>
import Example from '../../../components/Example/Example.vue';

export default {
  name: 'ExamplePage',
  components: {
    Example,
  },
};
</script>
