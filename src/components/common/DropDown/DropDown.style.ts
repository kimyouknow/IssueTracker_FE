import styled from '@emotion/styled';

export const Container = styled.div`
  width: 59px;
  height: 32px;
`;

export const Indicator = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  color: ${({ theme: { colors } }) => colors.grayScale.label};
  ${({ theme: { typography } }) => typography.link.small}
  :hover {
    color: ${({ theme: { colors } }) => colors.grayScale.body};
  }
`;

export const Panels = styled.ul`
  width: 240px;

  background-color: ${({ theme: { colors } }) => colors.grayScale.line};
  border: 1px solid ${({ theme: { colors } }) => colors.grayScale.line};
  border-radius: 16px;
  overflow: hidden;
`;

export const PanelsHeader = styled.h4`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 240px;
  height: 48px;
`;

export const Option = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  width: 240px;
  height: 44px;
  background-color: ${({ theme: { colors } }) => colors.grayScale.offWhite};
  border-top: 1px solid ${({ theme: { colors } }) => colors.grayScale.line};
  :hover {
    cursor: pointer;
    background-color: ${({ theme: { colors } }) => colors.grayScale.inputBackground};
  }
`;
