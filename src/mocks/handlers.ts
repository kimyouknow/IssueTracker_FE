import { faker } from '@faker-js/faker/locale/ko';
import { rest } from 'msw';

const createUser = () => ({
  id: faker.datatype.uuid(),
  name: faker.name.fullName(),
});

export const createRandomUserIdList = (n: number) => Array.from({ length: n }, () => createUser());

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get('/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(createRandomUserIdList(10)));
  }),
];
