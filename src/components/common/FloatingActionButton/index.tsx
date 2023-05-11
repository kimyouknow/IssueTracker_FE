import Icon from '@/components/common/Icon';

import * as S from './FloatingActionButton.style';

export interface FloatingActionButtonProps {
  primary?: boolean;
}

const FloatingActionButton = ({ primary = true }: FloatingActionButtonProps) => {
  return (
    <S.Container primary={primary}>
      <Icon type="plus" size="xl" />
    </S.Container>
  );
};

export default FloatingActionButton;
