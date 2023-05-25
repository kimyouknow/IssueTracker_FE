import { atom } from 'recoil';

import { AssignType } from '@/types/domain.type';

export const assignAtom = atom<AssignType[]>({
  key: 'assignAtom',
  default: [],
});
