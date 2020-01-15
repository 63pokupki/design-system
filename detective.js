// анализ связанности шаблонов и файлов стилей
const fs = require("fs");
const path = require("path");
const matchAll = require("match-all");
const gonzales = require("gonzales-pe");

class Detective {
    // установить зависимость между шаблонами и файлами стилей
    find_dependencies(templates, styles_files_array) {
        // добавляем классы шаблонам
        templates = this.set_classes_for_templates(templates);
        // добавляем классы файлам стилей
        styles_files_array = this.set_classes_for_styles(styles_files_array);

        // связываем шаблоны с файлами стилей
        const result = templates.map(template => {
            let linked_styles = new Set();
            // перебор массива с файлами стилей
            styles_files_array.forEach(style_file => {
                const css_classes = style_file.classes;
                // перебираем классы шаблона
                template.classes.forEach(class_name => {
                    if (css_classes.includes(class_name)) {
                        linked_styles.add(style_file.name);
                    }
                });
            });
            linked_styles = Array.from(linked_styles);

            const styles_query = linked_styles.map(style => {
                return `@import "~styles/elements/${style}";`
            }).join(" ");

            return { template: template.name, styles: linked_styles, prepared_import: styles_query };
        });

        return result;
    }

    get_html_classes(path_to_file) {
        // получаем данные из файла
        const raw_data = this.get_data(path_to_file);
        // очищаем их и приводим к единому виду
        const clean_data = raw_data.replace(/'/g, '"').replace(/ {1,}/g, " ");
        // вычленяем классы с помощью регулярного выражения
        const raw_classes = matchAll(clean_data, /class="(.*?)"/gi).toArray();

        // убираем дубляжи классов
        const classes_array = new Set(
            flatten(
                raw_classes.map(item => {
                    return item.toLowerCase().split(" ");
                })
            )
        );

        // возвращаем массив с классами
        return Array.from(classes_array);
    }

    get_css_classes(path_to_file) {
        const data = this.get_data(path_to_file);

        let tree = gonzales.parse(data, { syntax: "scss" });
        let unique_style_class_set = new Set();

        // очистка стилей от лишнего
        // оставляем только стилевые правила
        tree.traverseByType("stylesheet", stylesheet => {
            stylesheet.eachFor((child, i, parent) => {
                if (child) {
                    if (!child.is("ruleset")) {
                        parent.removeChild(i);
                    } else {
                        child.eachFor((child, i, parent) => {
                            if (child) {
                                // очищаем все, кроме селекторов
                                if (!child.is("selector")) {
                                    parent.removeChild(i);
                                } else {
                                    // очищаем все, кроме классов
                                    child.eachFor((child, i, parent) => {
                                        if (!child.is("class")) {
                                            parent.removeChild(i);
                                        }
                                    });
                                    // оставляем только первый заведующий класс
                                    child.eachFor("class", (child, i, parent) => {
                                        if (i != 0) {
                                            parent.removeChild(i);
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            });
        });

        // отбираем чистые значения классов
        tree.traverseByType("ident", (node, i, parent) => {
            if (parent.is("class")) {
                unique_style_class_set.add(node.content.toLowerCase());
            }
        });

        return Array.from(unique_style_class_set);
    }

    // получить массив объектов типа {name: имя файла, path: абсолютный путь до файла} c фильтром по маске рекурсивно
    get_files(dir, mask, fileslist = []) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            if (fs.statSync(path.join(__dirname, dir, file)).isDirectory()) {
                this.get_files(path.join(dir, file), mask, fileslist);
            } else {
                if (file.includes(mask)) {
                    fileslist.push({
                        name: file,
                        path: path.join(__dirname, dir, file)
                    });
                }
            }
        });
        return fileslist;
    }

    // добавляет классы шаблонам
    set_classes_for_templates(templates) {
        return templates.map(template => {
            template.classes = this.get_html_classes(template.path);
            return template;
        });
    }

    // добавляет классы стилям
    set_classes_for_styles(styles) {
        return styles.map(style_file => {
            style_file.classes = this.get_css_classes(style_file.path);
            return style_file;
        });
    }

    get_data(file_path) {
        const data = fs.readFileSync(file_path, "utf-8");
        return data;
    }
}

// функция делает массив одноуровневым, плоским
function flatten(array) {
    var flattend = [];
    (function flat(array) {
        array.forEach(function(el) {
            if (Array.isArray(el)) flat(el);
            else flattend.push(el);
        });
    })(array);
    return flattend;
}

const detective = new Detective();

const templates_array = detective.get_files("src/templates/specific/delivery/", "delivery.html");
const styles_array = detective.get_files("src/styles", ".scss");

const linked = detective.find_dependencies(templates_array, styles_array);

console.log(linked);