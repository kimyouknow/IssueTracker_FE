import publicApi from './instance';
import { REQUEST_API } from './requestUrl';

export const postSignup = (email: string, password: string) =>
  publicApi.post<{ message: string }>(REQUEST_API.AUTH.SIGNUP, {
    email,
    password,
  });

export const postLogin = (email: string, password: string) =>
  publicApi.post<{ message: string; token: string }>(REQUEST_API.AUTH.LOGIN, {
    email,
    password,
  });
