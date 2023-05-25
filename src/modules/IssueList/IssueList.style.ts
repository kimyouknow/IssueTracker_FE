import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.grayScale.line};
  gap: 1px;
`;
