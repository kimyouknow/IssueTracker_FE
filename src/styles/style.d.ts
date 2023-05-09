import '@emotion/react';

import CustomTheme from './themes';

type CustomThemeType = typeof CustomTheme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomThemeType {}
}
