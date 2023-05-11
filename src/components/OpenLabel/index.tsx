import Icon from '@/components/common/Icon';

import * as S from './OpenLabel.style';

export interface OpenLabelProps {
  isOpen: boolean;
}

const OpenLabel = ({ isOpen }: OpenLabelProps) => {
  return isOpen ? <Open /> : <Close />;
};

const Open = () => {
  return (
    <S.Open>
      <Icon type="alertCircle" />
      <S.Text>열림</S.Text>
    </S.Open>
  );
};

const Close = () => {
  return (
    <S.Close>
      <Icon type="archive" />
      <S.Text>닫힘</S.Text>
    </S.Close>
  );
};

export default OpenLabel;
