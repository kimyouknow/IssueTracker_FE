import { atom } from 'recoil';

export interface MileStoneAtom {
  id: string;
  subject: string;
  description: string;
  endDate: string;
  isOpen: boolean;
  openIssueCount: number;
  closeIssueCount: number;
}

export const mileStoneAtom = atom<MileStoneAtom[]>({
  key: 'mileStoneAtom',
  default: [],
});
