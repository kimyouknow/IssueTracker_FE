import { InputHTMLAttributes, useState } from 'react';

import * as S from './DateInput.style';

export interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  validate?: (v: string) => string;
}

// TODO: YYYYMMDD 형식으로 포맷 강제하기
const DateInput = ({ label, id, placeholder = '입력 사항', validate, ...rest }: DateInputProps) => {
  const [value, setValue] = useState('');
  const [wasTouch, setWasTouch] = useState(false);
  const isError = wasTouch;
  const error = validate && validate(value);

  const onBlurHandler = () => {
    setWasTouch(true);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const _value = event.target.value;
    setValue(_value);
    setWasTouch(true);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        autoComplete="off"
        {...rest}
      />
      {isError && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

export default DateInput;
