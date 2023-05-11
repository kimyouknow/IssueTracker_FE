import styled from '@emotion/styled';

export const Container = styled.div``;

export const Text = styled.h3`
  color: ${({ theme: { colors } }) => colors.success.normal};
  ${({ theme: { typography } }) => typography.link.large}
`;
