import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 7px 8px;
  gap: 3px;

  width: 343px;
  height: 36px;

  color: ${({ theme: { colors } }) => colors.grayScale.gray_100};
  background-color: ${({ theme: { colors } }) => colors.grayScale.gray_500};
  border-radius: 10px;
`;

export const FilterSection = styled.div``;

export const InputSection = styled.div``;

export const Input = styled.input`
  width: 100%;
  height: 22px;
`;

export const PlaceHolder = styled.span``;
