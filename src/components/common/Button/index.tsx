import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './Button.style';
import { ButtonStyle, Size } from './Button.type';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  buttonStyle: ButtonStyle;
  children: ReactNode;
}

const Button = ({ size = 'm', buttonStyle = 'standard', children, ...props }: ButtonProps) => {
  return (
    <S.Container size={size} buttonStyle={buttonStyle} type="button" {...props}>
      {children}
    </S.Container>
  );
};

export default Button;
