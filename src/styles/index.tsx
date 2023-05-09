import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';

import GlobalStyle from './GlobalStyle';
import themes from './theme';

interface StylesProps {
  children: ReactNode;
}

const Styles = ({ children }: StylesProps) => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Styles;
