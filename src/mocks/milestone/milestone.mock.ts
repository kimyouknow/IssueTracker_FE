import { faker } from '@faker-js/faker';

import { MileStoneAtom } from '@/stores/Milestone/milestone.atom';
import { formatDateYYMMDD } from '@/utils/date.util';

const createMilestone = (): MileStoneAtom => ({
  id: faker.datatype.uuid(),
  subject: faker.name.jobTitle(),
  description: faker.name.jobDescriptor(),
  endDate: formatDateYYMMDD(
    faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'),
  ),
  isOpen: Math.random() > 0.5,
  openIssueCount: faker.datatype.number({ min: 0, max: 999 }),
  closeIssueCount: faker.datatype.number({ min: 0, max: 999 }),
});

export const createRandomMilestones = (n: number) =>
  Array.from({ length: n }, () => createMilestone());
