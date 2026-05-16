import type { StorybookConfig } from '@storybook/nextjs-vite';
import type { InlineConfig } from 'vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: [
    '../docs/**/*.mdx',
    '../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-themes',
  ],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
  viteFinal: async (config: InlineConfig) => {
    // Rolldown 1.0.0-rc.15 has a Linux-specific bug where it emits `null`
    // in the __vite__mapDeps preload array for the DocsRenderer chunk (the
    // 70-byte react-6iSw4CsE.js MDXProvider re-export gets inlined on Linux
    // but not macOS). Disabling modulePreload bypasses that preload path
    // entirely; dynamic imports still work correctly.
    config.build ??= {};
    config.build.modulePreload = false;
    return config;
  },
};
export default config;