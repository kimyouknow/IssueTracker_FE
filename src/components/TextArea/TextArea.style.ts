import styled from '@emotion/styled';

export const Line = styled.hr`
  border: none;
  border-top: 1px dotted ${({ theme: { colors } }) => colors.grayScale.line};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 343px;
  gap: 24px;
  padding: 16px 24px;
  border-radius: 16px;

  color: ${({ theme: { colors } }) => colors.grayScale.placeHoler};
  background-color: ${({ theme: { colors } }) => colors.grayScale.background};
  textarea::placeholder {
    color: ${({ theme: { colors } }) => colors.grayScale.placeHoler};
  }
  :has(textarea:focus) {
    color: ${({ theme: { colors } }) => colors.grayScale.titleActive};
    background-color: ${({ theme: { colors } }) => colors.grayScale.white};
    border: 1px solid ${({ theme: { colors } }) => colors.grayScale.titleActive};
    textarea::placeholder {
      color: ${({ theme: { colors } }) => colors.grayScale.label};
    }
    ${Line} {
      border-top: 1px dotted ${({ theme: { colors } }) => colors.grayScale.titleActive};
    }
  }
  // filled
  :has(textarea:not(:placeholder-shown):not(:focus)) {
    color: ${({ theme: { colors } }) => colors.grayScale.black};
    background-color: ${({ theme: { colors } }) => colors.grayScale.inputBackground};
    ${Line} {
      border-top: 1px dotted ${({ theme: { colors } }) => colors.grayScale.line};
    }
  }
  :has(textarea:disabled) {
    background-color: ${({ theme: { colors } }) => colors.grayScale.inputBackground};
    opacity: 0.5;
  }
`;

export const Label = styled.label`
  ${({ theme: { typography } }) => typography.text.xSmall}
  color: ${({ theme: { colors } }) => colors.grayScale.label};
`;

export const TextArea = styled.textarea`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  color: inherit;
  background-color: inherit;
`;

export const FileAttach = styled.div`
  display: flex;
  gap: 8px;
  ${({ theme: { typography } }) => typography.text.xSmall}
  color: ${({ theme: { colors } }) => colors.grayScale.label};
`;
