import { rest } from 'msw';

import { REQUEST_API, ROOT_API_URL } from '@/api/config/requestUrl';

import { createRandomMilestones } from './milestone.mock';

const milestoneMockHandler = [
  // GET: api/milestones
  rest.get(ROOT_API_URL + REQUEST_API.MILESTONE.INDEX, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        countOfOpenMilestones: 10,
        countOfClosedMilestones: 0,
        milestones: createRandomMilestones(10),
      }),
    );
  }),
];

export default milestoneMockHandler;
