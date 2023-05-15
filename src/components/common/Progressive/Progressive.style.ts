import styled from '@emotion/styled';

export const Container = styled.div`
  width: 244px;
  height: 8px;
  color: ${({ theme: { colors } }) => colors.grayScale.label};
  background-color: ${({ theme: { colors } }) => colors.grayScale.background};
`;

export const Background = styled.div`
  overflow: hidden;
  height: inherit;
  width: inherit;
  border-radius: 10px;
`;

export const FilledBackground = styled.div<{ rate: number }>`
  height: inherit;
  width: ${({ rate }) => rate}%;
  background-color: ${({ theme: { colors } }) => colors.primary.normal};
`;

export const DetailContainer = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span`
  ${({ theme: { typography } }) => typography.text.xSmall};
`;

export const IssueContainer = styled.div`
  display: flex;
  gap: 8px;
`;
