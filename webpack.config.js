const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");

// объединяем общие и индивидуальные компоненты
const htmlPagesReusableComponents = generateHtmlPages('./src/sections/common');
const htmlPagesIndividualComponents = generateHtmlPages('./src/sections/specific');
const pages = htmlPagesReusableComponents.concat(htmlPagesIndividualComponents);

module.exports = {
    mode: "development", //режим сборки
    entry: {
        // подсветка синтаксиса разметки - не включается в конечную сборку
        "_highlight-syntax": [
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
            "./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js"
        ],
        // Внутренние стили дизайн системы - не включается в конечную сборку
        "_ds-utils": ["./src/styles/_ds-utils.scss"],
        // Иконки для категорий закупок
        "categories-icons-sprite": ["./src/categories-icons-sprite/categories/categories-icons.js"],
         // Итоговые стили дизайн системы - включаются в конечную сборку
        "ds-ui-kit": ["./src/styles/ds-ui-kit.scss"],
    }, //объект с точками входа
    output: {
        path: path.join(__dirname, "build/"), //общий путь для выходных файлов
        filename: "js/[name].js?[hash]" //в этом параметре мы индивидуально добавляем необходимую директорию перед именем файлов
    },
    watch: true, //Слежение за изменениями
    watchOptions: {
        ignored: /node_modules/, //исключения в слежении
        poll: 500 //интервал обновления
    },
    devtool: "inline-source-map", //Инструменты разработчика
    resolve: {
        alias: {
            //краткие имена путей для импортов
            vue$: "vue/dist/vue.esm.js",
            styles: path.resolve(__dirname, "src/styles"),
            images: path.resolve(__dirname, "src/images"),
            icons: path.resolve(__dirname, "src/icons"),
            fonts: path.resolve(__dirname, "src/fonts")
        },
        modules: ["node_modules", "src"], //папки доступные для сканирования
        extensions: [".tsx", ".ts", ".js"]
    },
    resolveLoader: {
        modules: ["node_modules"],
        moduleExtensions: ["-loader"]
    },
    module: {
        //Загрузчики
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/(node_modules|bower_components)/",
                query: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: false,
                            removeComments: false,
                            collapseWhitespace: false,
                            attrs: ["img:src", "svg:src"]
                        }
                    }
                ]
            },
            {
                test: /images\/.*\.(jpg|png|gif|svg)$/,
                use: {
                    loader: "file",
                    options: {
                        limit: 2048,
                        name: "images/[name].[ext]"
                    }
                }
            },
            {
                test: /fonts\/.*\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: "file",
                    query: {
                        publicPath: "../",
                        limit: 2048,
                        name: "fonts/[name].[ext]"
                    }
                }
            },
            {
                test: /categories-icons-sprite\/.*\.svg$/,
                loader: "svg-sprite-loader",
                options: {}
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css?[hash]"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html"
        })
    ].concat(pages),
    optimization: {
        //настройки оптимизации и минификации
        flagIncludedChunks: true,
        minimize: false,
        namedModules: true,
        namedChunks: true,
        mergeDuplicateChunks: true,
        removeEmptyChunks: true,
        removeAvailableModules: true,
        noEmitOnErrors: true,
        concatenateModules: true
    }
};

// функция возвращающая массив html-webpack-plugin для шаблонов html по директории
function generateHtmlPages(templateDir) {
    // Read files in template directory
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        // Split names and extension
        const parts = item.split(".");
        const name = parts[0];
        const extension = parts[1];
        // Create new HTMLWebpackPlugin with options
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
        });
    });
}
