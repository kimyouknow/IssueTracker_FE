import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div`
  display: flex;
  width: 321px;
  height: 40px;

  border: 1px solid ${({ theme: { colors } }) => colors.grayScale.line};
  color: ${({ theme: { colors } }) => colors.grayScale.label};
  background-color: ${({ theme: { colors } }) => colors.grayScale.background};
  border-radius: 11px;
  ${({ theme: { typography } }) => typography.link.small};

  a:first-of-type {
    border-right: 1px solid ${({ theme: { colors } }) => colors.grayScale.line};
  }
  overflow: hidden;
`;

export const ButtonWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: inherit;
  padding: 0px;
  gap: 8px;

  :hover {
    background-color: ${({ theme: { colors } }) => colors.grayScale.inputBackground};
  }
  :active {
    background-color: ${({ theme: { colors } }) => colors.grayScale.line};
  }
`;
