// eslint-disable-next-line no-undef
const CracoAlias = require('craco-alias');

// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './src',
        aliases: {
          // Define your aliases here
          '@/components': 'Components',
          '@/utils': 'utils',
          '@/styles': 'styles',
          // Add more aliases as needed
        },
      },
    },
  ],
};
