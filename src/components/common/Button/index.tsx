'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './Button.style';
import { ButtonStyle, ThemeSize } from './Button.type';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  themeSize?: ThemeSize;
  buttonStyle?: ButtonStyle;
  children: ReactNode;
}

const Button = ({ themeSize = 'm', buttonStyle = 'standard', children, ...props }: ButtonProps) => {
  return (
    <S.Container themeSize={themeSize} buttonStyle={buttonStyle} type="button" {...props}>
      {children}
    </S.Container>
  );
};

export default Button;
