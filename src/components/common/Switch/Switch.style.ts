import styled from '@emotion/styled';

export const Container = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  position: relative;
  width: 196px;
  height: 32px;

  background-color: ${({ theme: { colors } }) => colors.grayScale.gray_600};
  border-radius: 8px;
`;

export const OptionButton = styled.button`
  width: 96px;
  height: 28px;

  &[data-option='true'] {
    z-index: 1;
    background-color: ${({ theme: { colors } }) => colors.grayScale.white};
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 8px rgba(0, 0, 0, 0.15);
    border-radius: 7px;
  }
`;
