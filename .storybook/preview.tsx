import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from '@emotion/react';
import themes from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyle';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '390px',
            height: '844px',
          },
          type: 'mobile',
        },
      },
      defaultViewport: 'mobile',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
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
