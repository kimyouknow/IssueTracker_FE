import styled from '@emotion/styled';

export const Container = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 50%;
  border: 1px solid ${({ theme: { colors } }) => colors.grayScale.gray_300};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
