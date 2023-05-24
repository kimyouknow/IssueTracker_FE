import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1px;
  width: 308px;

  background-color: ${({ theme: { colors } }) => colors.grayScale.line};
  border: 1px solid ${({ theme: { colors } }) => colors.grayScale.line};
  border-radius: 16px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
  width: 100%;
  padding: 32px;
  background-color: ${({ theme: { colors } }) => colors.grayScale.offWhite};
  &:nth-of-type(1) {
    border-radius: 16px 16px 0 0;
  }
  &:nth-of-type(3) {
    border-radius: 0 0 16px 16px;
  }
`;

export const FilterWrapperHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterTitle = styled.h2``;

export const FilterWrapperBody = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const AssignElement = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 244px;
  height: 44px;
  > img {
    border-radius: 50%;
  }
`;
