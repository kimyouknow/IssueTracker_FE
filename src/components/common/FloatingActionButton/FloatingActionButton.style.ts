import styled from '@emotion/styled';

export const Container = styled.button<{ primary: boolean }>`
  width: 64px;
  height: 64px;

  color: ${({ theme: { colors } }) => colors.grayScale.white};
  background-color: ${({ primary, theme: { colors } }) =>
    primary ? colors.primary.normal : colors.secondary.normal};
  border-radius: 50%;
`;
