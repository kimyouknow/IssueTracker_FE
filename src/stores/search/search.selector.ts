import { selector } from 'recoil';

import { getEntries } from '@/utils/etc.util';

import { FilterOption, filterOptionAtom, initFilterOption } from './search.atom';

export const textSearchOptionSelector = selector({
  key: 'textSearchOption',
  get: ({ get }) => {
    const filterOption = get(filterOptionAtom);

    const textFilterOption = getEntries(filterOption).reduce((acc, cur) => {
      const [key, value] = cur;
      if (typeof value === 'boolean') {
        const openState = value ? 'open' : 'close';
        return (acc += ` is:${openState}`);
      }
      acc += value.map((v: string) => ` ${key}:${v}`).join('');
      return acc;
    }, '');

    return textFilterOption;
  },
  set: ({ get, set }, newValue) => {
    const filterOptions = { ...get(filterOptionAtom) };

    if (typeof newValue !== 'string') return;

    if (newValue === '') {
      return;
    }

    const tokens = newValue.trim().split(' ');
    for (const token of tokens) {
      const [key, value] = token.split(':');

      if (value === undefined || value === '') continue;

      if (key === 'is') {
        if (value === 'open') {
          filterOptions.isOpen = true;
        } else if (value === 'close') {
          filterOptions.isOpen = false;
        }
        continue;
      }
      if (key in filterOptions) {
        const prev = [...filterOptions[key as keyof Omit<FilterOption, 'isOpen'>]];
        filterOptions[key as keyof Omit<FilterOption, 'isOpen'>] = [...new Set([...prev, value])];
      }
    }

    set(filterOptionAtom, filterOptions);
  },
});
