const path = require('path');

import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from '@emotion/react';
import themes from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyle';

const preview: Preview = {
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

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: themes,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

export default preview;
