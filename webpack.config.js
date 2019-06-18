const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const entry = require('./entry.js'); //файл с точками входа

module.exports = {
    entry: entry, //объект с точками входа
    output: {
        path: path.join(__dirname, 'dist/'), //общий путь для выходных файлов
        filename: "js/[name].js" //в этом параметре мы индивидуально добавляем необходимую директорию перед именем файлов
    },
    devServer: {
        compress: true
    },
    watch: true, //Слежение за изменениями
    watchOptions: {
        ignored: /node_modules/, //исключения в слежении
        poll: 200 //интервал обновления
    },
    devtool: false, //Инструменты разработчика
    resolve: {
        modules: ['node_modules', 'src'], //папки доступные для сканирования
    },
    resolveLoader: {
        modules: ['node_modules'],
        moduleExtensions: ['-loader']
    },
    module: { //Загрузчики
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']

            },
            {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']

            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false,
                        removeComments: false,
                        collapseWhitespace: false,
                        attrs: ['img:src']
                    }
                }]
            },
            {
                test: /fonts.*\.(woff|woff2|eot|ttf|svg){1}$/,
                use: {
                    loader: 'file',
                    query: {
                        useRelativePath: false,
                        publicPath: '',
                        name: 'fonts/[name].[ext]'
                    }
                }
            },
            {
                test: /images.*\.(jpg|png|gif|svg){1}$/,
                use: {
                    loader: 'url',
                    options: {
                        limit: 8192,
                        publicPath: '',
                        name: 'images/[name].[ext]'
                    }
                }
            },
            {
                test: /icons.*\.svg$/,
                loader: 'svg-sprite-loader',
                options: {}
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ],
    optimization: { //настройки оптимизации и минификации
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
