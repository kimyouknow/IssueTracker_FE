import { Theme, css } from '@emotion/react';
import styled from '@emotion/styled';

import { ButtonStyle, Size } from './Button.type';

export const Container = styled.button<{ size: Size; buttonStyle: ButtonStyle }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;

  color: ${({ theme: { colors } }) => colors.grayScale.white};
  background-color: ${({ theme: { colors } }) => colors.primary.normal};

  ${({ theme, size }) => sizeMap[size](theme)}

  :hover {
    background-color: ${({ theme: { colors } }) => colors.primary.dark};
  }

  :focus {
    border: 4px solid ${({ theme: { colors } }) => colors.primary.light};
    background-color: ${({ theme: { colors } }) => colors.primary.normal};
  }

  :disabled {
    background-color: ${({ theme: { colors } }) => colors.primary.normal};
    opacity: 0.5;
  }

  // override style
  ${({ buttonStyle, theme }) => buttonStyle === 'secondary' && secondaryCss(theme)}
`;

const secondaryCss = ({ colors }: Theme) => css`
  color: ${colors.primary.normal};
  border: 4px solid ${colors.primary.normal};
  background-color: ${colors.grayScale.white};
  :hover {
    color: ${colors.primary.dark};
    border-color: ${colors.primary.dark};
    background-color: ${colors.grayScale.white};
  }

  :focus {
    color: ${colors.primary.light};
    border-color: ${colors.primary.light};
    background-color: ${colors.grayScale.white};
  }

  :disabled {
    color: ${colors.primary.normal};
    border-color: ${colors.primary.normal};
    background-color: ${colors.grayScale.white};
  }
`;

const sizeMap = {
  l: ({ typography }: Theme) => css`
    width: 340px;
    height: 64px;
    border-radius: 20px;
    ${typography.link.medium}
  `,
  m: ({ typography }: Theme) => css`
    width: 240px;
    height: 56px;
    border-radius: 20px;
    ${typography.link.medium}
  `,
  s: ({ typography }: Theme) => css`
    width: 120px;
    height: 40px;
    border-radius: 11px;
    ${typography.link.xSmall}
  `,
};
