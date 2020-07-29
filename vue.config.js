const path = require('path');

const vueSrc = './src';
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/utils/_variables.scss";@import "@/styles/utils/_mixins.scss";',
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, vueSrc),
        // краткие имена путей для импортов
        styles: path.resolve(__dirname, 'src/styles'),
        images: path.resolve(__dirname, 'src/images'),
        icons: path.resolve(__dirname, 'src/icons'),
        fonts: path.resolve(__dirname, 'src/fonts'),
      },
      extensions: ['.js', '.vue', '.json'],
    },
  },
};
