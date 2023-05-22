import publicApi from '@/api/config/instance';
import { REQUEST_API } from '@/api/config/requestUrl';

const postSignup = (email: string, password: string) =>
  publicApi.post<{ message: string }>(REQUEST_API.AUTH.SIGNUP, {
    email,
    password,
  });

const postLogin = (email: string, password: string) =>
  publicApi.post<{ message: string; token: string }>(REQUEST_API.AUTH.LOGIN, {
    email,
    password,
  });

const authApi = {
  postSignup,
  postLogin,
};

export default authApi;
