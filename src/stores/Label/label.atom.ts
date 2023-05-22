import { atom } from 'recoil';

export interface LabelAtom {
  id: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export const labelAtom = atom<LabelAtom[]>({
  key: 'labelAtom',
  default: [],
});
