import { InputHTMLAttributes, useState } from 'react';

import * as S from './TextInput.style';
import { ThemeSize } from './TextInput.type';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  themeSize: ThemeSize;
  validate?: (v: string) => string;
  isSuccess?: boolean;
}

const TextInput = ({
  id,
  label,
  themeSize = 'l',
  placeholder = '입력 사항',
  isSuccess = false,
  validate,
  ...rest
}: TextInputProps) => {
  const [value, setValue] = useState('');
  const [wasTouch, setWasTouch] = useState(false);
  const error = validate && validate(value);
  const isError = wasTouch && !!error;
  const isThemeSizeSmall = themeSize === 's';

  const onBlurHandler = () => {
    setWasTouch(true);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const _value = event.target.value;
    setValue(_value);
    setWasTouch(true);
  };

  return (
    <>
      <S.Container themeSize={themeSize} isError={isError} isSuccess={isSuccess}>
        {isThemeSizeSmall && <S.Label>{label}</S.Label>}
        {!isThemeSizeSmall && value && <S.Label>{label}</S.Label>}
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
      </S.Container>
      {!isThemeSizeSmall && isError && <S.Error>{error}</S.Error>}
      {!isThemeSizeSmall && isSuccess && <S.Success>{error}</S.Success>}
    </>
  );
};

export default TextInput;
