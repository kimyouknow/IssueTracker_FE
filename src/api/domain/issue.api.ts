import publicApi from '@/api/config/instance';
import { REQUEST_API } from '@/api/config/requestUrl';

import { BaseResponseType, GetLabelsType } from '../config/api.types';

const getLabels = () => publicApi.get<BaseResponseType<GetLabelsType>>(REQUEST_API.ISSUE.INDEX);

const labelApi = {
  getLabels,
};

export default labelApi;
