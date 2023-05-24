import { AxiosResponse } from 'axios';

import { AssignType, IssueType, LabelType, MileStoneType } from '@/types/domain.type';

export interface GetMileStonesType {
  countOfOpenMilestones: number;
  countOfClosedMilestones: number;
  milestones: MileStoneType[];
}

export interface GetLabelsType {
  labels: LabelType[];
}

// FIXME: AssignType AuthorType형태가 같은데 사용하는 atom은 다름.
export interface GetMembersType {
  members: AssignType[];
}

export interface GetIssueType {
  countOfOpenIssues: number;
  countOfClosedIssues: number;
  issues: IssueType[];
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
