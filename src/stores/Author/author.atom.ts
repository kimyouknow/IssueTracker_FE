import { atom } from 'recoil';

export interface AuthorAtom {
  id: string;
  nickname: string;
  profileUrl: string;
}

export const authorAtom = atom<AuthorAtom[]>({
  key: 'authorAtom',
  default: [],
});
