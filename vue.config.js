const path = require("path");

const vueSrc = "./src";
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData:
                    '@import "@/styles/utils/_variables.scss";@import "@/styles/utils/_mixins.scss";@import "@/styles/utils/_extends.scss";@import "@/components/index.scss";',
            },
        },
    },
    chainWebpack: (config) => {
        config.module
            .rule("images")
            .use("url-loader")
            .loader("url-loader")
            .tap((options) => {
                return {
                    limit: true,
                    name: "img/[name].[hash:8].[ext]",
                };
            });

        config.module
            .rule("svg")
            .use("file-loader")
            .loader("svg-url-loader")
            .tap(() => ({
                limit: 10240,
                encoding: "base64",
                name: "img/[name].[hash:8].[ext]",
            }));
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, vueSrc),
                // краткие имена путей для импортов
                styles: path.resolve(__dirname, "src/styles"),
                images: path.resolve(__dirname, "src/images"),
                icons: path.resolve(__dirname, "src/icons"),
                fonts: path.resolve(__dirname, "src/fonts"),
            },
            extensions: [".js", ".vue", ".json"],
        },
    },
};
