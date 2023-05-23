import styled from '@emotion/styled';

export const Container = styled.div`
  width: 59px;
  height: 32px;
  position: relative;
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

export const Panels = styled.ul<{ left: number; top: number }>`
  position: absolute;
  left: ${({ left }) => left - 30}px;
  top: ${({ top }) => 40 + top}px;
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

  width: 240px;
  height: 44px;
  background-color: ${({ theme: { colors } }) => colors.grayScale.offWhite};
  border-top: 1px solid ${({ theme: { colors } }) => colors.grayScale.line};
  :hover {
    cursor: pointer;
    background-color: ${({ theme: { colors } }) => colors.grayScale.inputBackground};
  }
`;

export const OptionInfo = styled.div<{ isCheckAvailable: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ isCheckAvailable }) => (isCheckAvailable ? '90' : '100')}%;
  gap: 8px;

  > img {
    border-radius: 50%;
  }
  > span {
    text-overflow: ellipsis;
    overflow: hidden;
    width: ${({ isCheckAvailable }) => (isCheckAvailable ? '90' : '100')}%;
    height: 1.2em;
    white-space: nowrap;
  }
`;

export const ColorIcon = styled.div<{ bgColor: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
`;
