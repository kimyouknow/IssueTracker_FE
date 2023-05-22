import { AxiosResponse } from 'axios';

import { AssignAtom } from '@/stores/Assign/assign.atom';
import { LabelAtom } from '@/stores/Label/label.atom';
import { MileStoneAtom } from '@/stores/Milestone/milestone.atom';

export interface GetMileStonesType {
  countOfOpenMilestones: number;
  countOfClosedMilestones: number;
  milestones: MileStoneAtom[];
}

export interface GetLabelsType {
  labels: LabelAtom[];
}

// FIXME: AssignAtom과 AuthorAtom형태가 같은데 사용하는 atom은 다름.
export interface GetMembersType {
  members: AssignAtom[];
}

export interface ErrorResponseType {
  status: number;
  message: string;
}

export interface BaseResponseType<T> extends AxiosResponse<T> {
  status: number;
  data: T;
  message: string;
}
