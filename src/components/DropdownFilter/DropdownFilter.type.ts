import { DropDownProps, OptionsType } from '@/components/common/DropDown';
import { AssignAtom } from '@/stores/Assign/assign.atom';
import { AuthorAtom } from '@/stores/Author/author.atom';
import { LabelAtom } from '@/stores/Label/label.atom';
import { MileStoneAtom } from '@/stores/Milestone/milestone.atom';

export type DropDownFilterType = 'loggedInUser' | 'author' | 'label' | 'milestone' | 'assign';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChildDropDownFilterProps extends Omit<DropDownProps, 'id' | 'label' | 'options'> {}

export const loggedInUserOptions = [
  { id: 'openIssue', label: '열린 이슈' },
  { id: 'authorMe', label: '내가 작성한 이슈' },
  { id: 'assignMe', label: '나에게 할당된 이슈' },
  { id: 'closeIssue', label: '닫힌 이슈' },
];

export const parseToAuthorOptions = (members: AuthorAtom[]): OptionsType[] => {
  const options = [...members].map(({ id, nickname, profileUrl }) => ({
    id,
    label: nickname,
    iconSrc: profileUrl,
  }));

  return options;
};

export const parseToAssignOptions = (members: AssignAtom[]): OptionsType[] => {
  const _options = [...members].map(({ id, nickname, profileUrl }) => ({
    id,
    label: nickname,
    iconSrc: profileUrl,
  }));

  const options = [{ id: 'noAssign', label: '담당자가 없는 이슈' }, ..._options];
  return options;
};

export const parseToLabelOptions = (labels: LabelAtom[]): OptionsType[] => {
  const _options = [...labels].map(({ id, title, bgColor }) => ({
    id,
    label: title,
    bgColor,
  }));

  const options = [{ id: 'noLabel', label: '레이블이 없는 이슈' }, ..._options];
  return options;
};

export const parseToMilestoneOptions = (milestones: MileStoneAtom[]): OptionsType[] => {
  const _options = [...milestones].map(({ id, subject }) => ({
    id,
    label: subject,
  }));
  const options = [{ id: 'noMilestone', label: '마일스톤이 없는 이슈' }, ..._options];

  return options;
};
