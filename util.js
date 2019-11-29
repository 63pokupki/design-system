const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const path = require("path");

// функция возвращающая массив html-webpack-plugin для шаблонов html рекурсивно для директории
function templates(dir = "src/templates", fileslist = [], t = []) {
    let files = fs.readdirSync(dir);

    
    files.forEach(file => {
        if (fs.statSync(path.join(__dirname, dir, file)).isDirectory()) {
            templates(path.join(dir, file), fileslist, t);
        } else {
            fileslist.push(path.join(__dirname, dir, file));
            if (file.includes(".html")) {
                t.push(
                    new HtmlWebpackPlugin({
                        filename: `${file}`,
                        template: path.resolve(__dirname, `${dir}/${file}`),
                        favicon: path.resolve(__dirname, "favicon.ico"),
                        cache: true
                    })
                );
            }
        }
    });

    return t;
};

const tmp = templates();

module.exports.templates = tmp;

