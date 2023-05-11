import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;

  position: absolute;
  width: 126px;
  height: 30px;

  border-radius: 30px;
  ${({ theme: { typography } }) => typography.text.xSmall}
`;

export const Open = styled(Container)`
  border: 1px solid ${({ theme: { colors } }) => colors.primary.normal};
  color: ${({ theme: { colors } }) => colors.primary.normal};
  background-color: ${({ theme: { colors } }) => colors.primary.light};
`;

export const Close = styled(Container)`
  border: 1px solid ${({ theme: { colors } }) => colors.secondary.normal};
  color: ${({ theme: { colors } }) => colors.secondary.normal};
  background-color: ${({ theme: { colors } }) => colors.secondary.light};
`;

export const Text = styled.span``;
