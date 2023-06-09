import commentMockHandler from '@/mocks/comment/comment.mockHandler';
import issueMockHandler from '@/mocks/issue/issue.mockHandler';
import labelMockHandler from '@/mocks/label/label.mockHandler';
import milestoneMockHandler from '@/mocks/milestone/milestone.mockHandler';
import userMockHandler from '@/mocks/user/user.mockHandler';

const handlers = [
  ...userMockHandler,
  ...labelMockHandler,
  ...milestoneMockHandler,
  ...issueMockHandler,
  ...commentMockHandler,
];

export default handlers;
