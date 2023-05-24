import { useEffect, useState } from 'react';

import DropDown from '@/components/common/DropDown';
import Icon from '@/components/common/Icon';
import { useDebounce } from '@/hooks/useDebounce';
import useSearchFilter from '@/stores/search/useSearchFilter';
import { OptionsType } from '@/types/option.type';

import * as S from './SearchBar.style';

export interface SearchBarProps {
  initValue?: string;
}

const SEARCH_FILTER_OPTION = [
  { id: 'openIssue', label: '열린 이슈', value: 'is:open' },
  { id: 'closeIssue', label: '닫힌 이슈', value: 'is:close' },
  { id: 'authorMe', label: '내가 작성한 이슈', value: 'author:login_nickname' },
  { id: 'AssignMe', label: '나에게 할당된 이슈', value: 'assign:login_nickname' },
];

const SearchBar = ({ initValue = '' }: SearchBarProps) => {
  const { textFilterOptionReadOnly, updateTextToFilterOption } = useSearchFilter();
  const [inputValue, setInputValue] = useState(initValue);
  const [filterValue, setFilterValue] = useState([] as OptionsType[]);

  const handleChangeTextToFilterOption = useDebounce(500, (value: string) => {
    updateTextToFilterOption(value);
  });

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const _value = event.currentTarget.value;
    setInputValue(_value);
    handleChangeTextToFilterOption(_value);
  };

  const handleClickFilterOption = (event: { target: any; type?: any }) => {
    const { value } = event.target;
    setFilterValue(value);
    updateTextToFilterOption(value.map((v: OptionsType) => v.label).join(' '));
  };

  useEffect(() => {
    setInputValue(textFilterOptionReadOnly);
  }, [textFilterOptionReadOnly]);

  return (
    <S.Container>
      <S.FilterSection>
        <DropDown
          id="searchBarFilter"
          label="필터"
          value={filterValue}
          options={SEARCH_FILTER_OPTION}
          onChange={handleClickFilterOption}
        />
      </S.FilterSection>
      <S.InputSection>
        <Icon type="search" />
        <S.Input placeholder="Search all issues" value={inputValue} onChange={onChangeHandler} />
      </S.InputSection>
    </S.Container>
  );
};

export default SearchBar;
