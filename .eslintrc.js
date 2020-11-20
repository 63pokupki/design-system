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
        "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
        "no-use-before-define": "off",
        "no-shadow": "off",
        "array-callback-return": "off",
        "no-param-reassign": "off",
        "prefer-destructuring": "off",
        "getter-return": "off",
        "no-empty": "off",
        "func-names": "off",
        "consistent-return": "off",
        "no-restricted-syntax": "off",
        "no-prototype-builtins": "off",
        "no-plusplus": "off",
        "no-underscore-dangle": "off",
        eqeqeq: "off",
        "no-nested-ternary": "off",
        "prefer-rest-params": "off",
        "no-multi-assign": "off",
        quotes: ["error", "double"],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        indent: ["error", 4],
        "max-classes-per-file": "off",
        "prefer-const": "off",
        "max-len": ["error", 120],
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
            },
        },
    ],
};
