import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 375px;
  height: 410px;
  gap: 24px;
  border-radius: 16px;
`;

export const Label = styled.label``;

export const TextArea = styled.textarea`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #c6c6c6;
  }
`;

export const Error = styled.span``;
