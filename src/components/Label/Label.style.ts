import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { LabeCSSlType, LabelSizeType } from './Label.type';

export const Container = styled.div<{
  type: LabeCSSlType;
  backgroundColor?: string;
  color?: string;
  size: LabelSizeType;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  gap: 4px;

  ${({ size }) => sizeMap[size]()}

  color: ${({ type, color, theme: { colors } }) => getColor(type, colors, color)};
  background-color: ${({ type, backgroundColor, theme: { colors } }) =>
    getBackgroundColor(type, colors, backgroundColor)};
  border-radius: 32px;
`;

export const Text = styled.span``;

const sizeMap = {
  l: () => css`
    min-width: 114px;
    height: 30px;
  `,
  m: () => css`
    min-width: 90px;
    height: 28px;
  `,
};

const getColor = (type: string, colors: any, color?: string) => {
  switch (type) {
    case 'dark':
      return colors.grayScale.black;
    case 'light':
      return colors.grayScale.white;
    case 'line':
      return colors.grayScale.gray_100;
    default:
      return color || colors.grayScale.white;
  }
};

const getBackgroundColor = (type: string, colors: any, backgroundColor?: string) => {
  switch (type) {
    case 'dark':
      return colors.grayScale.gray_500;
    case 'light':
      return colors.grayScale.gray_100;
    case 'line':
      return colors.grayScale.gray_600;
    default:
      return backgroundColor || colors.primary.normal;
  }
};
