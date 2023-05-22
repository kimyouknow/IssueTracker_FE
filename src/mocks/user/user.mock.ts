import { faker } from '@faker-js/faker';

import { AssignAtom } from '@/stores/Assign/assign.atom';

const createMember = (): AssignAtom => ({
  id: faker.datatype.uuid(),
  nickname: faker.name.fullName(),
  profileUrl: faker.image.avatar(),
});

export const createRandomMembers = (n: number) => Array.from({ length: n }, () => createMember());
