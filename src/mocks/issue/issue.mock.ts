import { faker } from '@faker-js/faker';

import { createRandomLabels } from '@/mocks/label/label.mock';
import { createRandomMilestones } from '@/mocks/milestone/milestone.mock';
import { createRandomMembers } from '@/mocks/user/user.mock';
import { IssueType } from '@/types/domain.type';
import { formatDateYYMMDD } from '@/utils/date.util';

const createIssue = (idx: number): IssueType => ({
  id: String(idx),
  status: Math.random() > 0.5 ? 'OPEN' : 'CLOSE',
  subject: faker.name.jobTitle(),
  writer: faker.name.fullName(),
  profileUrl: faker.image.avatar(),
  createDateTime: formatDateYYMMDD(
    faker.date.between('2020-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z'),
  ),
  commentCnt: faker.datatype.number({ min: 0, max: 999 }),
  milestone: createRandomMilestones(1)[0],
  assignees: createRandomMembers(5),
  labels: createRandomLabels(3),
});

export const createRandomIssues = (n: number) =>
  Array.from({ length: n }, (_, idx) => createIssue(idx));
