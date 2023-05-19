import { useRecoilValue, useSetRecoilState } from 'recoil';

import { filterOptionAtom } from '@/stores/search/search.atom';
import { textSearchOptionSelector } from '@/stores/search/search.selector';

const useSearchFilter = () => {
  const filterOptionReadOnly = useRecoilValue(filterOptionAtom);
  const textFilterOptionReadOnly = useRecoilValue(textSearchOptionSelector);

  const _parseTextToOption = useSetRecoilState(textSearchOptionSelector);

  const updateTextToFilterOption = (text: string) => {
    _parseTextToOption(text);
  };

  const updateFilterOption = () => {
    console.log('updateFilterOption');
  };

  return {
    filterOptionReadOnly,
    textFilterOptionReadOnly,
    updateTextToFilterOption,
    updateFilterOption,
  };
};

export default useSearchFilter;
