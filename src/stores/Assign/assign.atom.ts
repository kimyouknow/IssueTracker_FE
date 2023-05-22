import { atom } from 'recoil';

export interface AssignAtom {
  id: string;
  nickname: string;
  profileUrl: string;
}

export const assignAtom = atom<AssignAtom[]>({
  key: 'assignAtom',
  default: [],
});
