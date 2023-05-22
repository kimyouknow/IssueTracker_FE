import axios, {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { ROOT_API_URL } from './requestUrl';
import { onResponse, onResponseError } from './responseHandler';

type CustomResponseFormat<T = any> = T;

interface CustomInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<CustomResponseFormat>>;
  };
  get<T>(...params: Parameters<AxiosInstance['get']>): Promise<T>;
  delete<T>(...params: Parameters<AxiosInstance['delete']>): Promise<T>;
  post<T>(...params: Parameters<AxiosInstance['post']>): Promise<T>;
  put<T>(...params: Parameters<AxiosInstance['put']>): Promise<T>;
  patch<T>(...params: Parameters<AxiosInstance['patch']>): Promise<T>;
}

const publicApi: CustomInstance = axios.create({
  baseURL: ROOT_API_URL,
});

publicApi.defaults.timeout = 2500;

publicApi.interceptors.response.use(onResponse, onResponseError);

export default publicApi;
