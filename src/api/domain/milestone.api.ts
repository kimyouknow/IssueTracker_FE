import publicApi from '@/api/config/instance';
import { REQUEST_API } from '@/api/config/requestUrl';

import { BaseResponseType, GetMileStonesType } from '../config/api.types';

const getMileStones = () =>
  publicApi.get<BaseResponseType<GetMileStonesType>>(REQUEST_API.MILESTONE.INDEX);

const mileStoneApi = {
  getMileStones,
};

export default mileStoneApi;
