import { faker } from '@faker-js/faker';

import { createRandomMembers } from '@/mocks/user/user.mock';
import { CommentStatusType, CommentType } from '@/types/domain.type';
import { formatDateYYMMDD } from '@/utils/date.util';

const generateFollowStatus = () => {
  const statuses = ['INITIAL', 'CLOSED', 'REOPEN'];
  return statuses[Math.floor(Math.random() * statuses.length)] as CommentStatusType;
};

const createComment = (): CommentType => ({
  writer: createRandomMembers(1)[0],
  commentId: faker.datatype.uuid(),
  content: faker.name.jobDescriptor(),
  createDateTime: formatDateYYMMDD(
    faker.date.between('2020-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z'),
  ),
  status: generateFollowStatus(),
  isEditable: Math.random() > 0.5 ? true : false,
});

export const createRandomComments = (n: number) => Array.from({ length: n }, () => createComment());
