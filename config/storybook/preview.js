import { addParameters } from "@storybook/vue";

addParameters({
    backgrounds: {
        default: "white",
        values: [
            { name: "white", value: "#ffffff" },
            { name: "light", value: "#f2f2f3" },
            { name: "dark", value: "#171717" },
        ],
    },
});
