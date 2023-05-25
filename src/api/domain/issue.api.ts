import publicApi from '@/api/config/instance';
import { REQUEST_API } from '@/api/config/requestUrl';

import { BaseResponseType, GetIssueType } from '../config/api.types';

const getIssues = () => publicApi.get<BaseResponseType<GetIssueType>>(REQUEST_API.ISSUE.INDEX);

const issueApi = {
  getIssues,
};

export default issueApi;
