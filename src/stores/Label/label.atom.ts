import { atom } from 'recoil';

import { LabelType } from '@/types/domain.type';

export const labelAtom = atom<LabelType[]>({
  key: 'labelAtom',
  default: [],
});
