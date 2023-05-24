import { AssignAtom } from '@/stores/Assign/assign.atom';
import { AuthorAtom } from '@/stores/Author/author.atom';
import { LabelAtom } from '@/stores/Label/label.atom';
import { MileStoneAtom } from '@/stores/Milestone/milestone.atom';
import { OptionsType } from '@/types/option.type';

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

export const parseToAssignOptions = (members: AssignAtom[], isNoOption = true): OptionsType[] => {
  const options = [...members].map(({ id, nickname, profileUrl }) => ({
    id,
    label: nickname,
    iconSrc: profileUrl,
  }));

  if (isNoOption) return options;

  const optionsWithNo = [{ id: 'noAssign', label: '담당자가 없는 이슈' }, ...options];
  return optionsWithNo;
};

export const parseToLabelOptions = (labels: LabelAtom[], isNoOption = true): OptionsType[] => {
  const options = [...labels].map(({ id, title, bgColor }) => ({
    id,
    label: title,
    bgColor,
  }));

  if (isNoOption) return options;

  const optionsWithNo = [{ id: 'noLabel', label: '레이블이 없는 이슈' }, ...options];
  return optionsWithNo;
};

export const parseToMilestoneOptions = (
  milestones: MileStoneAtom[],
  isNoOption = true,
): OptionsType[] => {
  const options = [...milestones].map(({ id, subject }) => ({
    id,
    label: subject,
  }));

  if (isNoOption) return options;

  const optionsWithNo = [{ id: 'noMilestone', label: '마일스톤이 없는 이슈' }, ...options];
  return optionsWithNo;
};
