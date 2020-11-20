/* eslint-disable max-len */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const { templates } = require("./util.js");

const entry = require("./entry.js");

module.exports = {
    entry, // объект с точками входа
    output: {
        path: path.join(__dirname, "build/"), // общий путь для выходных файлов
        filename: "js/[name].js?[hash]", // в этом параметре мы индивидуально добавляем необходимую директорию перед именем файлов
    },
    watchOptions: {
        aggregateTimeout: 250, // задержка перед обновлением
        ignored: ["dist/**/*", "build/**/*", "docs/**/*", "node_modules"], // исключения в слежении
        poll: 500, // интервал обновления
    },
    devServer: {
        port: 9000,
    },
    devtool: "inline-source-map", // Инструменты разработчика
    resolve: {
        alias: {
            // краткие имена путей для импортов
            vue$: "vue/dist/vue.esm.js",
            styles: path.resolve(__dirname, "src/styles"),
            images: path.resolve(__dirname, "src/images"),
            icons: path.resolve(__dirname, "src/icons"),
            fonts: path.resolve(__dirname, "src/fonts"),
        },
        modules: ["node_modules", "src"], // папки доступные для сканирования
        extensions: [".tsx", ".ts", ".js"],
    },
    resolveLoader: {
        modules: ["node_modules"],
        moduleExtensions: ["-loader"],
    },
    module: {
    // Загрузчики
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, "src/styles"),
                use: [
                    "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.html$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: false,
                            attributes: {
                                list: [
                                    {
                                        tag: "img",
                                        attribute: "src",
                                        type: "src",
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /images\/.*\.(jpg|png|gif|svg)$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, "src/images"),
                use: {
                    loader: "file",
                    options: {
                        limit: 2048,
                        name: "images/[name].[ext]",
                        esModule: false,
                    },
                },
            },
            {
                test: /favicon\.ico/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "file",
                    options: {
                        name: "favicon.ico",
                        esModule: false,
                    },
                },
            },
            {
                test: /fonts\/.*\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, "src/fonts"),
                use: {
                    loader: "file",
                    query: {
                        publicPath: "../",
                        limit: 2048,
                        name: "fonts/[name].[ext]",
                    },
                },
            },
            {
                test: /categories-icons-sprite\/categories\/.*\.svg$/,
                exclude: /(node_modules|bower_components)/,
                loader: "svg-sprite-loader",
                options: {},
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].css?[hash]",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html?[hash]",
            template: "index.html",
            favicon: path.resolve(__dirname, "favicon.ico"),
            excludeChunks: ["onboarding"],
        }),
        ...templates,
        // отдельные шаблоны под onboarding
        new HtmlWebpackPlugin({
            filename: "onboarding-stock-desctop.html",
            template: "./src/module/onboarding/template/onboarding-stock-desctop.html",
            favicon: path.resolve(__dirname, "favicon.ico"),
        }),
        new HtmlWebpackPlugin({
            filename: "onboarding-stock-mobile.html",
            template: "./src/module/onboarding/template/onboarding-stock-mobile.html",
            favicon: path.resolve(__dirname, "favicon.ico"),
        }),
        new HtmlWebpackPlugin({
            filename: "onboarding-item.html",
            template: "./src/module/onboarding/template/onboarding-item.html",
            favicon: path.resolve(__dirname, "favicon.ico"),
        }),
    ],
    optimization: {
    // настройки оптимизации и минификации
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
        noEmitOnErrors: true,
    },
};
