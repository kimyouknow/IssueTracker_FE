import { Theme, css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeSize } from './ColorCode.type';

export const Container = styled.div<{ themeSize: ThemeSize; isError: boolean }>`
  padding: 0px 24px;

  color: ${({ theme: { colors } }) => colors.grayScale.titleActive};
  background-color: ${({ theme: { colors } }) => colors.grayScale.background};

  :has(input[type='color']:active),
  :has(input[type='color']:focus),
  :has(button:focus),
  :has(button:active) {
    background-color: ${({ theme: { colors } }) => colors.grayScale.white};
    border: 1px solid ${({ theme: { colors } }) => colors.grayScale.titleActive};
  }

  ${({ theme: { typography } }) => typography.text.small}

  ${({ isError, theme }) => isError && errorCss(theme)}

  ${({ theme, themeSize }) => sizeMap[themeSize](theme)};
`;

export const Label = styled.label`
  ${({ theme: { typography } }) => typography.text.xSmall};
  color: ${({ theme: { colors } }) => colors.grayScale.label};
`;

export const HexColorInput = styled.input`
  width: 24px;
`;

export const HexTextInput = styled.input`
  width: 60px;
`;

export const TextColorInput = styled.div``;

export const RefreshButton = styled.button``;

export const CheckInput = styled.input``;

const errorCss = ({ colors }: Theme) => css`
  background-color: ${colors.error.light};
  border: 1px solid ${colors.error.normal};
  input::placeholder {
    color: ${colors.error.dark};
  }

  ${Label} {
    color: ${colors.error.dark};
  }
`;

const sizeMap = {
  l: ({ typography }: Theme) => css`
    width: 340px;
    height: 64px;
    border-radius: 16px;
    ${typography.text.small}
  `,
  m: ({ typography }: Theme) => css`
    width: 320px;
    height: 56px;
    border-radius: 14px;
    ${typography.text.small}
  `,
  s: ({ typography }: Theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    ${Label} {
      width: 80px;
    }
    width: 240px;
    height: 40px;
    border-radius: 11px;
    ${typography.text.small}
  `,
};
