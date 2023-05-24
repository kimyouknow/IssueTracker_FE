import Icon from '@/components/Icon';

import * as S from './OpenLabel.style';

export interface OpenLabelProps {
  isOpen: boolean;
  openCount?: number;
  closeCount?: number;
}

const OpenLabel = ({ isOpen, openCount = 0, closeCount = 0 }: OpenLabelProps) => {
  return isOpen ? <Open count={openCount} /> : <Close count={closeCount} />;
};

const Open = ({ count }: { count: number }) => {
  return (
    <S.Open>
      <Icon type="alertCircle" />
      <S.Text>열린 이슈</S.Text>
      {count > 0 && <S.Text>{count}개</S.Text>}
    </S.Open>
  );
};

const Close = ({ count }: { count: number }) => {
  return (
    <S.Close>
      <Icon type="archive" />
      <S.Text>닫힌 이슈</S.Text>
      {count > 0 && <S.Text>{count}개</S.Text>}
    </S.Close>
  );
};

export default OpenLabel;
