module.exports = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        '@storybook/addon-actions',
        {
            name: '@storybook/addon-docs',
            options: {
                babelOptions: {
                    presets: [
                        [
                            '@vue/cli-plugin-babel/preset',
                            {
                                jsx: false,
                            },
                        ],
                    ],
                },
            },
        },
        '@storybook/addon-knobs/dist/register',
        '@storybook/addon-links/register',
        '@storybook/addon-backgrounds',
        '@storybook/addon-a11y',
    ],
};
