import { addParameters } from "@storybook/vue";

addParameters({
    backgrounds: {
        default: "light",
        values: [
            { name: "light", value: "#f2f2f3" },
            { name: "dark", value: "#171717" },
        ],
    },
});
