<template>
  <div>
    <h1>Это пример страницы на vue</h1>
    <Example class="ds-btn">Это кастомный тестовый компонент 2</Example>
  </div>
</template>

<script>
import Example from "../../../components/Example/Example.vue";

export default {
  name: "ExamplePage",
  components: {
    Example,
  },
};
</script>
