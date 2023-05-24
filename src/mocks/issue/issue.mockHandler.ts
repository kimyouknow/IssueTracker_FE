import { rest } from 'msw';

import { REQUEST_API, ROOT_API_URL } from '@/api/config/requestUrl';

import { createRandomIssues } from './issue.mock';

const issueMockHandler = [
  // GET: api/issue
  rest.get(ROOT_API_URL + REQUEST_API.ISSUE.INDEX, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        countOfOpenIssues: 10,
        countOfClosedIssues: 0,
        milestones: createRandomIssues(10),
      }),
    );
  }),
];

export default issueMockHandler;
