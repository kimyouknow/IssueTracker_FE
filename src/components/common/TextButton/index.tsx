import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './TextButton.style';
import { Size } from './TextButton.type';

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  children: ReactNode;
}

const TextButton = ({ size = 'm', children, ...props }: TextButtonProps) => {
  return (
    <S.Container size={size} type="button" {...props}>
      {children}
    </S.Container>
  );
};

export default TextButton;
