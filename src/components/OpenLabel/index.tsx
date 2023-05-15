import Icon from '@/components/common/Icon';

import * as S from './OpenLabel.style';

export interface OpenLabelProps {
  isOpen: boolean;
  count?: number;
}

const OpenLabel = ({ isOpen, count }: OpenLabelProps) => {
  return isOpen ? <Open count={count} /> : <Close count={count} />;
};

const Open = ({ count }: { count?: number }) => {
  return (
    <S.Open>
      <Icon type="alertCircle" />
      <S.Text>열린 이슈</S.Text>
      {count && <S.Text>{count}개</S.Text>}
    </S.Open>
  );
};

const Close = ({ count }: { count?: number }) => {
  return (
    <S.Close>
      <Icon type="archive" />
      <S.Text>닫힌 이슈</S.Text>
      {count && <S.Text>{count}개</S.Text>}
    </S.Close>
  );
};

export default OpenLabel;
