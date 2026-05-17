import type { StorybookConfig } from '@storybook/nextjs-vite';
import type { InlineConfig, Plugin } from 'vite';
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
    config.build ??= {};

    // Rolldown bug on Linux: the DocsRenderer chunk ends up with `import(null)`
    // instead of a real path for its dynamic @mdx-js/react import, causing a
    // runtime TypeError that silently produces a white canvas for all MDX pages.
    //
    // Fix part 1 – keep modulePreload disabled so the null in the preload
    // dependency array (a related but separate manifestation of the same bug)
    // does not also crash the page.
    config.build.modulePreload = false;

    // Fix part 2 – force @mdx-js/react into its own named chunk so Rolldown
    // generates a real file with the original {MDXProvider} export name intact.
    config.build.rollupOptions ??= {};
    const existingOutput = config.build.rollupOptions.output;
    config.build.rollupOptions.output = {
      ...(Array.isArray(existingOutput) ? existingOutput[0] : (existingOutput ?? {})),
      manualChunks(id: string) {
        if (id.includes('@mdx-js/react')) return 'mdx-js-react';
      },
    };

    // Fix part 3 – patch the generated bundle: replace the broken `import(null)`
    // in any chunk with an actual import pointing to the mdx-js-react chunk.
    config.plugins ??= [];
    (config.plugins as Plugin[]).push({
      name: 'fix-null-mdx-import',
      generateBundle(_opts, bundle) {
        const mdxEntry = Object.entries(bundle).find(
          ([key, chunk]) => chunk.type === 'chunk' && key.includes('mdx-js-react'),
        );
        if (!mdxEntry) return;
        const mdxFile = mdxEntry[0].split('/').pop()!;

        for (const chunk of Object.values(bundle)) {
          if (chunk.type === 'chunk' && chunk.code.includes('import(null)')) {
            chunk.code = chunk.code.replace(/import\(null\)/g, `import("./${mdxFile}")`);
          }
        }
      },
    });

    return config;
  },
};
export default config;