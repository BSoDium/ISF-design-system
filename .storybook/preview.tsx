import React from 'react';
import type { Preview } from '@storybook/nextjs-vite';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@fontsource/geist/latin.css';
import '@fontsource/geist-mono/latin.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/400-italic.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/600-italic.css';
import '@fontsource/playfair-display/700.css';
import { isfTheme, isfCssResolver } from '../theme';
import '../theme/types';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },

    layout: 'centered',
    backgrounds: { disable: true },

    docs: {
      container: ({ children, ...props }: any) => (
        <DocsContainer {...props}>
          <MantineProvider theme={isfTheme} cssVariablesResolver={isfCssResolver}>
            {children}
          </MantineProvider>
        </DocsContainer>
      ),
    },
  },

  globalTypes: {
    scheme: {
      name: 'Color Scheme',
      description: 'Mantine color scheme',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const scheme = (context.globals.scheme || 'light') as 'light' | 'dark';
      return (
        <MantineProvider theme={isfTheme} cssVariablesResolver={isfCssResolver} forceColorScheme={scheme}>
          <Story />
        </MantineProvider>
      );
    },
  ],
};

export default preview;