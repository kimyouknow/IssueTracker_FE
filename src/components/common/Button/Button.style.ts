import styled from '@emotion/styled';

export const Container = styled.button<{ primary: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;

  width: 343px;
  height: 56px;
  color: ${({ theme: { colors } }) => colors.grayScale.white};
  background-color: ${({ primary, theme: { colors } }) =>
    primary ? colors.primary.normal : colors.secondary.normal};
  border-radius: 20px;

  ${({ theme: { typography } }) => typography.link.small}
`;
