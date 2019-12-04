const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { templates } = require("./util.js");

const entry = require("./entry.js");

module.exports = {
    entry: entry, //объект с точками входа
    output: {
        path: path.join(__dirname, "build/"), //общий путь для выходных файлов
        filename: "js/[name].js?[hash]" //в этом параметре мы индивидуально добавляем необходимую директорию перед именем файлов
    },
    watchOptions: {
        aggregateTimeout: 500, //задержка перед обновлением
        ignored: ["dist/**/*", "build/**/*", "docs/**/*", "node_modules"], //исключения в слежении
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
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
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
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, "src/templates"),
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
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, "src/images"),
                use: {
                    loader: "file",
                    options: {
                        limit: 2048,
                        name: "images/[name].[ext]"
                    }
                }
            },
            {
                test: /favicon\.ico/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "file",
                    options: {
                        name: "favicon.ico"
                    }
                }
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
                        name: "fonts/[name].[ext]"
                    }
                }
            },
            {
                test: /categories-icons-sprite\/.*\.svg$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, "categories-icons-sprite"),
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
            filename: "index.html?[hash]",
            template: "index.html",
            favicon: path.resolve(__dirname, "favicon.ico")
        }),
        ...templates
    ],
    optimization: {
        //настройки оптимизации и минификации
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
        noEmitOnErrors: true,
    }
};
