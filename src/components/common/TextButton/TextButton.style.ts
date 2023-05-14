import { Theme, css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeSize } from './TextButton.type';

export const Container = styled.button<{ themeSize: ThemeSize }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;

  color: ${({ theme: { colors } }) => colors.grayScale.label};
  background-color: ${({ theme: { colors } }) => colors.grayScale.white};

  ${({ theme, themeSize }) => sizeMap[themeSize](theme)}

  :hover {
    color: ${({ theme: { colors } }) => colors.grayScale.body};
  }

  :focus {
    color: ${({ theme: { colors } }) => colors.grayScale.titleActive};
  }

  :disabled {
    color: ${({ theme: { colors } }) => colors.grayScale.body};
    opacity: 0.5;
  }
`;

const sizeMap = {
  m: ({ typography }: Theme) => css`
    width: 85px;
    height: 32px;
    ${typography.link.small}
  `,
  s: ({ typography }: Theme) => css`
    width: 69px;
    height: 32px;
    ${typography.link.xSmall}
  `,
};
