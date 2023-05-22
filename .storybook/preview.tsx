const path = require('path');

import React from 'react';

import { initialize, mswDecorator } from 'msw-storybook-addon';

import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import themes from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

// Initialize MSW
initialize();

const preview: Preview = {
  decorators: [
    mswDecorator,
    Story => (
      <RecoilRoot>
        <ThemeProvider theme={themes}>
          <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <Story />
          </QueryClientProvider>
        </ThemeProvider>
      </RecoilRoot>
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
