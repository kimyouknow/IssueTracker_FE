import { rest } from 'msw';

import { REQUEST_API, ROOT_API_URL } from '@/api/config/requestUrl';

import { createRandomMilestones } from './label.mock';

const labelMockHandler = [
  // GET: api/labels
  rest.get(ROOT_API_URL + REQUEST_API.MILESTONE.INDEX, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(createRandomMilestones(10)));
  }),
];

export default labelMockHandler;
