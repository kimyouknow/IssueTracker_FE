import React from 'react';

const path = require('path');

import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import themes from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyle';

const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    viewport: {},
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    webpackFinal: async (config, { configType }) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src/'),
      };
      return config;
    },
  },
};

export default preview;
