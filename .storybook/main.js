module.exports = {
  // Specify the framework as 'svelte'
  framework: {
    name: '@storybook/sveltekit',
    options: {}
  },

  // Define where Storybook should look for stories
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],

  // Add any necessary addons
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    '@chromatic-com/storybook'
  ],

  // Webpack configuration to handle Svelte files
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(svelte)$/,
      use: [
        {
          loader: 'svelte-loader',
          options: {
            preprocess: require('svelte-preprocess')()
          },
        },
      ],
    });

    config.resolve.extensions.push('.svelte');

    return config;
  },

  docs: {}
};
  