import * as S from './Progressive.style';
import { ProgressiveType } from './Progressive.type';

export interface ProgressiveProps {
  type?: ProgressiveType;
  rate: number;
}

// TODO 모바일 버전에는 bar형태가 없음.

const Progressive = ({ type = 'message', rate }: ProgressiveProps) => {
  return (
    <S.Container>
      <S.Text>{rate}%</S.Text>
    </S.Container>
  );
};

export default Progressive;
