import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 32px 24px;
  background-color: ${({ theme: { colors } }) => colors.grayScale.offWhite};

  > img {
    border-radius: 50%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  > h3 {
    ${({ theme: { typography } }) => typography.link.medium}
  }
`;

export const Labels = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const InfoDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  ${({ theme: { typography } }) => typography.text.small}
  color: ${({ theme: { colors } }) => colors.grayScale.label};
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
