import { atom } from 'recoil';

export interface FilterOption {
  isOpen: boolean;
  author: string[];
  label: string[];
  milestone: string[];
  assign: string[];
}

export const initFilterOption = {
  isOpen: true,
  author: [],
  label: [],
  milestone: [],
  assign: [],
};

export const filterOptionAtom = atom<FilterOption>({
  key: 'filterOptionAtom',
  default: {
    isOpen: true,
    author: [],
    label: [],
    milestone: [],
    assign: [],
  },
});
