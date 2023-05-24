import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  width: 601px;
  height: 42px;

  color: ${({ theme: { colors } }) => colors.grayScale.placeHoler};
  border: 1px solid ${({ theme: { colors } }) => colors.grayScale.line};
  border-radius: 11px;

  :hover {
    border-color: ${({ theme: { colors } }) => colors.grayScale.line};
  }
  :has(input:active),
  :has(input:focus) {
    border-color: ${({ theme: { colors } }) => colors.grayScale.titleActive};
    background-color: ${({ theme: { colors } }) => colors.grayScale.white};
    svg {
      color: ${({ theme: { colors } }) => colors.grayScale.titleActive};
    }
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 128px;
  height: 40px;

  color: ${({ theme: { colors } }) => colors.grayScale.titleActive};
  background-color: ${({ theme: { colors } }) => colors.grayScale.background};
  border-radius: 11px 0px 0px 11px;
  border-right: 1px solid ${({ theme: { colors } }) => colors.grayScale.line};
  :hover {
    background-color: ${({ theme: { colors } }) => colors.grayScale.line};
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;

  width: 472px;
  height: 40px;

  background-color: ${({ theme: { colors } }) => colors.grayScale.inputBackground};
  border-radius: 0px 11px 11px 0px;
`;

export const Input = styled.input`
  width: 100%;
`;
