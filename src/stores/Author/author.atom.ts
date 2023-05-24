import { atom } from 'recoil';

import { AuthorType } from '@/types/domain.type';

export const authorAtom = atom<AuthorType[]>({
  key: 'authorAtom',
  default: [],
});
