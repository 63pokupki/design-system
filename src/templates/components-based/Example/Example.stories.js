import Example from "./Example.vue";

export default {
    title: "Страницы/Пример страницы",
    component: Example,
};

export const page = () => ({
    render() {
        return <Example />;
    },
});
