export interface AssignType {
  id: string;
  nickname: string;
  profileUrl: string;
}

export interface AuthorType {
  id: string;
  nickname: string;
  profileUrl: string;
}

export interface LabelType {
  id: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface MileStoneType {
  id: string;
  subject: string;
  description: string;
  endDate: string;
  isOpen: boolean;
  openIssueCount: number;
  closeIssueCount: number;
}

export interface IssueType {
  id: string;
  status: 'OPEN' | 'CLOSE';
  subject: string;
  writer: string;
  profileUrl: string;
  createDateTime: string;
  commentCnt: number;
  milestone: MileStoneType;
  assignees: AssignType[];
  labels: LabelType[];
}

export type CommentStatusType = 'INITIAL' | 'CLOSED' | 'REOPEN';

// 이모티콘은 우선 제외
export interface CommentType {
  writer: AssignType;
  commentId: string;
  content: string;
  createDateTime: string;
  status: CommentStatusType;
  isEditable: boolean;
}
