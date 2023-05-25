import { InputHTMLAttributes } from 'react';

import * as S from './CheckInput.style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const CheckInput = ({ checked, onChange }: CheckInputProps) => {
  return (
    <S.Container>
      <S.Input checked={checked} onChange={onChange} type="checkbox" />
    </S.Container>
  );
};

export default CheckInput;
