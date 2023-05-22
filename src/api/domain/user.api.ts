import publicApi from '@/api/config/instance';
import { REQUEST_API } from '@/api/config/requestUrl';

import { BaseResponseType, GetMembersType } from '../config/api.types';

const getMembers = () => publicApi.get<BaseResponseType<GetMembersType>>(REQUEST_API.USER.MEMBER);

const userApi = {
  getMembers,
};

export default userApi;
