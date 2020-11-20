module.exports = {
  // подсветка синтаксиса разметки - не включается в конечную сборку
  "highlight-syntax": [
    "./node_modules/clipboard/dist/clipboard.min.js",
    "./node_modules/prismjs/prism.js",
    "./node_modules/prismjs/components/prism-markdown.min.js",
    "./node_modules/prismjs/components/prism-wiki.min.js",
    "./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js",
    "./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.css",
    "./node_modules/prismjs/themes/prism.css",
    "./node_modules/prismjs/themes/prism-okaidia.css",
    "./node_modules/prismjs/plugins/toolbar/prism-toolbar.min.js",
    "./node_modules/prismjs/plugins/toolbar/prism-toolbar.css",
    "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js",
    "./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js",
  ],
  onboarding: ["./node_modules/@63pokupki/onboarding-core/index.css", "./src/styles/page/onboarding.scss", "./src/module/onboarding/js/onboarding.js"],
  // Внутренние стили дизайн системы - не включается в конечную сборку
  "ds-utils": ["./src/styles/utils/_ds-utils.scss", "./src/js/util.js"],
  // Иконки для категорий закупок
  "categories-icons-sprite": ["./src/categories-icons-sprite/categories/categories-icons.js"],
  // Итоговые стили дизайн системы - включаются в конечную сборку
  "ds-ui-kit": ["./src/styles/ds-all-style.scss"],
};
