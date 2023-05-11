import { useState } from 'react';

import Icon from '@/components/common/Icon';

import * as S from './SearchBar.style';

export interface SearchBarProps {
  placeHolder: string;
  defaultValue?: string;
  onChange: (e: any) => void;
}

//TODO: voice 기능, 자동완성 기능
const SearchBar = ({ placeHolder, defaultValue = '', onChange }: SearchBarProps) => {
  const [value, setValue] = useState(defaultValue);

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const _value = event.currentTarget.value;
    onChange(_value);
    setValue(_value);
  };
  return (
    <S.Container>
      <Icon type="search" />
      <S.Input placeholder={placeHolder} value={value} onChange={onChangeHandler} />
      <Icon type="voice" />
    </S.Container>
  );
};

export default SearchBar;
