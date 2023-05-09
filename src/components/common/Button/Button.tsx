import React from 'react';

import * as S from './Button.style';

export interface IButton {
  primary?: boolean;
  backgroundColor?: string;
  size?: string;
  label: string;
  onClick?: () => void;
}

const Button = ({
  primary = false,
  backgroundColor,
  size = 'medium',
  label,
  ...props
}: IButton) => {
  return (
    <S.Container type="button" {...props}>
      {label}
    </S.Container>
  );
};

export default Button;
