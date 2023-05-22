import { atom } from 'recoil';

export interface AuthorAtom {
  id: string;
  nickname: string;
  profileImg: string;
}

export const authorAtom = atom<AuthorAtom[]>({
  key: 'authorAtom',
  default: [],
});
