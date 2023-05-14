import { Theme, css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeSize } from './TextInput.type';

export const Container = styled.div<{ themeSize: ThemeSize; isError: boolean; isSuccess: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 24px;

  color: ${({ theme: { colors } }) => colors.grayScale.placeHoler};
  background-color: ${({ theme: { colors } }) => colors.grayScale.background};
  input::placeholder {
    color: ${({ theme: { colors } }) => colors.grayScale.placeHoler};
  }
  :active {
    background-color: ${({ theme: { colors } }) => colors.grayScale.white};
    border: 1px solid ${({ theme: { colors } }) => colors.grayScale.titleActive};
  }
  // filled
  :not(:placeholder-shown):not(:focus) {
    color: ${({ theme: { colors } }) => colors.grayScale.black};
    background-color: ${({ theme: { colors } }) => colors.grayScale.inputBackground};
  }
  :disabled {
    background-color: ${({ theme: { colors } }) => colors.grayScale.inputBackground};
    opacity: 0.5;
  }
  ${({ isSuccess, theme }) => isSuccess && successCss(theme)}
  ${({ isError, theme }) => isError && errorCss(theme)}

  ${({ theme, themeSize }) => sizeMap[themeSize](theme)};
`;

export const Label = styled.label`
  ${({ theme: { typography } }) => typography.text.xSmall};
  color: ${({ theme: { colors } }) => colors.grayScale.label};
`;

export const Input = styled.input``;

const Message = styled.span`
  display: inline-block;
  margin-top: 8px;
  ${({ theme: { typography } }) => typography.text.xSmall}
`;

export const Success = styled(Message)`
  color: ${({ theme: { colors } }) => colors.success.dark};
`;

export const Error = styled(Message)`
  color: ${({ theme: { colors } }) => colors.error.dark};
`;

export const DateInput = styled.input``;

const successCss = ({ colors }: Theme) => css`
  background-color: ${colors.success.light};
  border: 1px solid ${colors.success.normal};
  input::placeholder {
    color: ${colors.success.dark};
  }
  :not(:placeholder-shown):not(:focus) {
    background-color: ${colors.success.light};
  }
  ${Label} {
    color: ${colors.success.dark};
  }
`;

const errorCss = ({ colors }: Theme) => css`
  background-color: ${colors.error.light};
  border: 1px solid ${colors.error.normal};
  input::placeholder {
    color: ${colors.error.dark};
  }
  :not(:placeholder-shown):not(:focus) {
    background-color: ${colors.error.light};
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
    width: 300px;
    height: 40px;
    border-radius: 11px;
    ${typography.text.small}
  `,
};
