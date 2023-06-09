import { rest } from 'msw';

import { REQUEST_API, ROOT_API_URL } from '@/api/config/requestUrl';

import { createRandomComments } from './comment.mock';

const commentMockHandler = [
  // GET: api/comment
  rest.get(ROOT_API_URL + REQUEST_API.COMMENT.INDEX + '/:issueId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ comments: createRandomComments(10) }));
  }),
];

export default commentMockHandler;
