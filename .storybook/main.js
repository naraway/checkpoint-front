const { loadConfigFromFile, mergeConfig } = require("vite");
const path = require("path");

module.exports = ({
  stories: [
    '../src/storybook/stories/**/*.stories.mdx',
    '../src/storybook/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal: async (config, { configType }) => {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    );

    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [],
      resolve: {
        alias: {
          '@nara-way/checkpoint': path.resolve(__dirname, '../src/comp'),
          '~': path.resolve(__dirname, '../src'),
        }
      },
      server: {
        proxy: {
          '/api/checkpoint': {
            target: 'http://localhost:9000',
            rewrite: path => path.replace('/api/checkpoint', '/'),
            changeOrigin: true,
            configure: proxy => proxy.on('proxyReq', proxy => console.log(`-> ${proxy.protocol}//${proxy.host}${proxy.path}`)),
          }
        },
      },
    });
  },
});
