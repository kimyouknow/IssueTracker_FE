import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { BaseResponseType, ErrorResponseType, GetMembersType } from '@/api/config/api.types';
import userApi from '@/api/domain/user.api';
import { memberQueryKey } from '@/api/queries/query.type';

export const useGetMembers = () =>
  useQuery<BaseResponseType<GetMembersType>, AxiosError<ErrorResponseType>>({
    queryKey: memberQueryKey.member,
    queryFn: () => userApi.getMembers(),
  });
