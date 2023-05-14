import { css } from '@emotion/react';

const colors = {
  primary: {
    light: '#C7EBFF',
    normal: '#007AFF',
    dark: '#004DE3',
  },
  secondary: {
    light: '#CCD4FF',
    normal: '#0025E7',
    dark: '#020070',
  },
  error: {
    light: '#FFD1CF',
    normal: '#FF3B30',
    dark: '#C60B00',
  },
  success: {
    light: '#DDFFE6',
    normal: '#34C759',
    dark: '#00A028',
  },
  grayScale: {
    black: '#000000',
    gray_000: '#14142B;',
    gray_100: '#8E8E93',
    gray_200: '#AEAEB2',
    gray_300: '#C7C7CC',
    gray_400: '#D1D1D6',
    gray_500: '#E5E5EA',
    gray_600: '#F2F2F7',
    white: '#FFFFFF',
    titleActive: '#14142B;',
    body: '#4E4B66',
    label: '#6E7191',
    placeHoler: '#A0A3BD',
    line: '#D9DBE9',
    inputBackground: '#EFF0F6',
    background: '#F7F7FC',
    offWhite: '#FEFEFE',
  },
};

const typography = {
  displayRegular: css`
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
  `,
  displayBold: css`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
  `,
  text: {
    large: css`
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 40px;
    `,
    medium: css`
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
    `,
    small: css`
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
    `,
    xSmall: css`
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
    `,
  },
  link: {
    large: css`
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 40px;
    `,
    medium: css`
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 32px;
    `,
    small: css`
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 28px;
    `,
    xSmall: css`
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 20px;
    `,
  },
};

const themes = {
  colors,
  typography,
};

export type CustomThemeTypes = typeof themes;

export default themes;
