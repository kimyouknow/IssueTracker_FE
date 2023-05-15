import { InputHTMLAttributes, useState } from 'react';

import Icon from '@/components/common/Icon';

import * as S from './ColorCode.style';
import { ThemeSize } from './ColorCode.type';

export interface ColorCodeProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  themeSize: ThemeSize;
}

const getRandomHexColor = (): string => {
  const letters = '0123456789ABCDEF';
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += letters[Math.floor(Math.random() * 16)];
  }
  return hexColor;
};

const isValidHexColor = (color: string): boolean => {
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexColorRegex.test(color);
};

const ColorCode = ({
  id,
  label,
  themeSize = 's',
  value: initValue = getRandomHexColor(),
  ...rest
}: ColorCodeProps) => {
  const [value, setValue] = useState(initValue);
  const [isError, setIsError] = useState(false);

  const checkValidHex = (v: string) => {
    setValue(v);
    if (!isValidHexColor(v)) {
      setIsError(true);
      return;
    }
    setIsError(false);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const _value = event.target.value;
    checkValidHex(_value);
  };

  const handleClickRefreshButton = () => {
    checkValidHex(getRandomHexColor());
  };

  return (
    <S.Container themeSize={themeSize} isError={isError}>
      <S.Label>{label}</S.Label>
      <S.HexColorInput
        id={id}
        type="color"
        value={value}
        onChange={onChangeHandler}
        autoComplete="off"
        {...rest}
      />
      <S.HexTextInput
        id={id}
        type="text"
        value={value}
        onChange={onChangeHandler}
        autoComplete="off"
        {...rest}
      />
      <S.RefreshButton onClick={handleClickRefreshButton}>
        <Icon type="refresh" />
      </S.RefreshButton>
    </S.Container>
  );
};

export default ColorCode;
