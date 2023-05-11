import { InputHTMLAttributes, useState } from 'react';

import * as S from './TextInput.style';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  validate?: (v: string) => string;
}

const TextInput = ({
  label,
  id,
  placeholder,
  validate,
  type = 'text',
  ...rest
}: TextInputProps) => {
  const [value, setValue] = useState('');
  const [wasTouch, setWasTouch] = useState(false);
  const isError = wasTouch;
  const error = validate && validate(value);

  const onBlurHandler = () => {
    setWasTouch(true);
  };

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const _value = event.currentTarget.value;
    setValue(_value);
    setWasTouch(true);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        id={id}
        type={type}
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

export default TextInput;
