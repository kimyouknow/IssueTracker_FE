import { faker } from '@faker-js/faker';

import { AssignType } from '@/types/domain.type';

const createMember = (): AssignType => ({
  id: faker.datatype.uuid(),
  nickname: faker.name.fullName(),
  profileUrl: faker.image.avatar(),
});

export const createRandomMembers = (n: number) => Array.from({ length: n }, () => createMember());
