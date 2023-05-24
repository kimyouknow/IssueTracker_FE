import * as S from './Progressive.style';
import { ProgressiveType } from './Progressive.type';

export interface ProgressiveProps {
  type?: ProgressiveType;
  openIssueCount: number;
  closeIssueCount: number;
}

const getProgressiveRate = (openIssueCount: number, closeIssueCount: number) => {
  const totalIssues = openIssueCount + closeIssueCount;
  if (totalIssues === 0) return 0;
  const closedRate = closeIssueCount / totalIssues;
  return Math.round(closedRate * 100);
};

const Progressive = ({ type = 'bar', openIssueCount, closeIssueCount }: ProgressiveProps) => {
  const rate = getProgressiveRate(openIssueCount, closeIssueCount);
  const isTextType = type === 'withMessage';

  return (
    <S.Container>
      <S.Background>
        <S.FilledBackground rate={rate} />
      </S.Background>
      {isTextType && (
        <S.DetailContainer>
          <S.Text>{rate}%</S.Text>
          <S.IssueContainer>
            <S.Text>열린 이슈 {openIssueCount}</S.Text>
            <S.Text>닫힌 이슈 {closeIssueCount}</S.Text>
          </S.IssueContainer>
        </S.DetailContainer>
      )}
    </S.Container>
  );
};

export default Progressive;
