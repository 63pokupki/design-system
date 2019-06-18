// post css config
module.exports = {
    plugins: {
        "postcss-import": {
            plugins: [require("stylelint")()]
        },
        "postcss-preset-env" : {},
        "autoprefixer": {},
        "css-mqpacker": {},
        "cssnano": {
            preset: 'default'
        }
    }
};
