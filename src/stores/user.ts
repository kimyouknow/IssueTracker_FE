import { atom } from 'recoil';

export interface User {
  id: string;
  name: string;
}

export const userState = atom<User[]>({
  key: 'userState',
  default: [],
});
