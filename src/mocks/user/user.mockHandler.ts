import { rest } from 'msw';

import { REQUEST_API, ROOT_API_URL } from '@/api/config/requestUrl';

import { createRandomMembers } from './user.mock';

const userMockHandler = [
  // GET: api/members
  rest.get(ROOT_API_URL + REQUEST_API.USER.MEMBER, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(createRandomMembers(10)));
  }),
];

export default userMockHandler;
