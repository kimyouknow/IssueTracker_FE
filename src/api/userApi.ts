import { User } from '@/stores/user';

import publicApi from './instance';
import { REQUEST_API } from './requestUrl';

export const postLogin = () => publicApi.get<User[]>(REQUEST_API.USER.INDEX);
