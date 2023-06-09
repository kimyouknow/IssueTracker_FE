import publicApi from '@/api/config/instance';
import { REQUEST_API } from '@/api/config/requestUrl';

import { BaseResponseType, GetCommentsType } from '../config/api.types';

const getComments = (issueId: string) =>
  publicApi.get<BaseResponseType<GetCommentsType>>(`${REQUEST_API.COMMENT.INDEX}/${issueId}`);

const commentApi = {
  getComments,
};

export default commentApi;
