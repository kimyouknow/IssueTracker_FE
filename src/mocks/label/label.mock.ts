import { faker } from '@faker-js/faker';

import { LabelType } from '@/types/domain.type';

const createLabel = (): LabelType => ({
  id: faker.datatype.uuid(),
  title: faker.name.jobType(),
  description: faker.name.jobDescriptor(),
  color: faker.color.rgb({ format: 'hex', casing: 'lower' }),
  bgColor: faker.color.rgb({ format: 'hex', casing: 'lower' }),
});

export const createRandomLabels = (n: number) => Array.from({ length: n }, () => createLabel());
