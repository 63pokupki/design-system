module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "@vue/airbnb"],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        quotes: ["error", "double"],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        indent: ["error", 4],
        "max-classes-per-file": "off",
        "prefer-const": "off",
        "max-len": ["error", 120],
        "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
        "no-restricted-syntax": ["error", "WithStatement"],
        "no-plusplus": "off",
        "no-underscore-dangle": "off",
        "object-curly-newline": ["error", {
            ExportDeclaration: { multiline: true, minProperties: 5 },
        }],
        "operator-linebreak": "off",
    },
    overrides: [
        {
            files: ["**/*.spec.[jt]s?(x)"],
            env: {
                jest: true,
            },
        },
        {
            files: ["**/*.stories.[jt]s?(x)"],
            rules: {
                "max-len": "off",
                "no-multiple-empty-lines": "off",
                indent: "off",
            },
        },
    ],
};
