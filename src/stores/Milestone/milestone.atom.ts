import { atom } from 'recoil';

import { MileStoneType } from '@/types/domain.type';

export const mileStoneAtom = atom<MileStoneType[]>({
  key: 'mileStoneAtom',
  default: [],
});
