/* eslint-disable max-len */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const entry = require('./entry.js');

module.exports = {
    mode: 'production', // режим сборки
    entry: {
        'ds-ui-kit': entry['ds-ui-kit'],
        'categories-icons-sprite': entry['categories-icons-sprite'],
        'item-page': ['./src/styles/page/item-page.scss'],
        delivery: ['./src/styles/page/delivery.scss'],
        cookies: ['./src/styles/page/cookies.scss'],
        'welcome-box': [
            './src/styles/page/welcome-box.scss',
            './src/js/welcome-box.js',
        ],
        skeleton: ['./src/styles/page/skeleton.scss'],
        onboarding: [
            './node_modules/@63pokupki/onboarding-core/index.css',
            './src/styles/page/onboarding.scss',
        ],
        header: entry.header,
        footer: entry.footer,
    }, // объект с точками входа
    output: {
        path: path.join(__dirname, 'dist/'), // общий путь для выходных файлов
        filename: 'js/[name].js', // в этом параметре мы индивидуально добавляем необходимую директорию перед именем файлов
    },
    watch: false, // Слежение за изменениями
    devtool: 'source-map', // Инструменты разработчика
    resolve: {
        alias: {
            // краткие имена путей для импортов
            vue$: 'vue/dist/vue.esm.js',
            styles: path.resolve(__dirname, 'src/styles'),
            images: path.resolve(__dirname, 'src/images'),
            icons: path.resolve(__dirname, 'src/icons'),
            fonts: path.resolve(__dirname, 'src/fonts'),
        },
        modules: ['node_modules', 'src'], // папки доступные для сканирования
        extensions: ['.tsx', '.ts', '.js'],
    },
    resolveLoader: {
        modules: ['node_modules'],
        moduleExtensions: ['-loader'],
    },
    module: {
        // Загрузчики
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false,
                            attributes: {
                                list: [
                                    {
                                        tag: 'img',
                                        attribute: 'src',
                                        type: 'src',
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /images\/.*\.(jpg|png|gif)$/,
                use: {
                    loader: 'file',
                    options: {
                        limit: 2048,
                        name: 'images/[name].[ext]?[hash]',
                        esModule: false,
                    },
                },
            },
            {
                test: /images\/.*\.svg$/,
                use: {
                    loader: 'url',
                    options: {
                        limit: 8192,
                        name: 'images/[name].[ext]?[hash]',
                        esModule: false,
                    },
                },
            },
            {
                test: /fonts\/.*\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'file',
                    query: {
                        publicPath: '../',
                        limit: 2048,
                        name: 'fonts/[name].[ext]',
                        esModule: false,
                    },
                },
            },
            {
                test: /categories-icons-sprite\/categories\/.*\.svg$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'svg-sprite-loader',
                options: {},
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/images/important_images/**/*',
                    to: 'images',
                    flatten: true,
                },
            ],
        }),
    ],
    optimization: {
        // настройки оптимизации и минификации
        minimize: true,
    },
};
