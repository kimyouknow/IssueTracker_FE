import styled from '@emotion/styled';

import { LabelType } from './Label.type';

export const Container = styled.div<{ type: LabelType; backgroundColor?: string; color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  gap: 4px;

  width: 114px;
  height: 30px;

  color: ${({ type, color, theme: { colors } }) => getColor(type, colors, color)};
  background-color: ${({ type, backgroundColor, theme: { colors } }) =>
    getBackgroundColor(type, colors, backgroundColor)};
  border-radius: 32px;
`;

export const Text = styled.span``;

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
