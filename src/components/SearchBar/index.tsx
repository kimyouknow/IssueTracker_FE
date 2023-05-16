import { useState } from 'react';

import Icon from '@/components/common/Icon';

import * as S from './SearchBar.style';

export interface SearchBarProps {
  initValue?: string;
  onChange: (e: any) => void;
}

const SearchBar = ({ initValue = '', onChange }: SearchBarProps) => {
  const [value, setValue] = useState(initValue);

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const _value = event.currentTarget.value;
    onChange(_value);
    setValue(_value);
  };
  return (
    <S.Container>
      <S.FilterSection></S.FilterSection>
      <S.InputSection>
        <Icon type="search" />
        <S.Input placeholder="Search all issues" value={value} onChange={onChangeHandler} />
      </S.InputSection>
    </S.Container>
  );
};

export default SearchBar;
