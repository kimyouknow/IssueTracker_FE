import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './TextButton.style';
import { ThemeSize } from './TextButton.type';

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  themeSize: ThemeSize;
  children: ReactNode;
}

const TextButton = ({ themeSize = 'm', children, ...props }: TextButtonProps) => {
  return (
    <S.Container themeSize={themeSize} type="button" {...props}>
      {children}
    </S.Container>
  );
};

export default TextButton;
