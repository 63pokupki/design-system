const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");

const entry = require('./entry.js');

// объединяем общие и индивидуальные компоненты
const htmlPagesReusableComponents = generateHtmlPages('./src/sections/common');
const htmlPagesIndividualComponents = generateHtmlPages('./src/sections/specific');
const pages = htmlPagesReusableComponents.concat(htmlPagesIndividualComponents);

module.exports = {
    mode: "production", //режим сборки
    entry: entry, //объект с точками входа
    output: {
        path: path.join(__dirname, "public/"), //общий путь для выходных файлов
        filename: "js/[name].js?[hash]" //в этом параметре мы индивидуально добавляем необходимую директорию перед именем файлов
    },
    watch: false, //Слежение за изменениями
    devtool: "source-map", //Инструменты разработчика
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
        minimize: true,
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