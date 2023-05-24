import { rest } from 'msw';

import { REQUEST_API, ROOT_API_URL } from '@/api/config/requestUrl';

import { createRandomLabels } from './label.mock';

const labelMockHandler = [
  // GET: api/labels
  rest.get(ROOT_API_URL + REQUEST_API.LABEL.INDEX, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ labels: createRandomLabels(10) }));
  }),
];

export default labelMockHandler;
