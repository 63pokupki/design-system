const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// функция возвращающая массив html-webpack-plugin для шаблонов html по директории
module.exports.templates = function templates(templateDirectoryArray = ["src/sections/common", "src/sections/specific"]) {
    let templates = [];

    templateDirectoryArray.forEach(dir => {
        let local_templates = fs.readdirSync(path.resolve(__dirname, dir));

        local_templates.map(file => {
            const parts = file.split(".");
            const name = parts[0];
            const extension = parts[1];

            templates.push(
                new HtmlWebpackPlugin({
                    filename: `${name}.html`,
                    template: path.resolve(__dirname, `${dir}/${name}.${extension}`),
                    favicon: path.resolve(__dirname, "favicon.ico")
                })
            );
        });
    });
    return templates;
}
