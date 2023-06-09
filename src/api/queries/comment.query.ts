import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { BaseResponseType, ErrorResponseType, GetCommentsType } from '@/api/config/api.types';
import commentApi from '@/api/domain/comment.api';
import { commentQueryKey } from '@/api/queries/query.type';

export const useGetComments = (issueId: string) =>
  useQuery<BaseResponseType<GetCommentsType>, AxiosError<ErrorResponseType>>({
    queryKey: commentQueryKey.detail(issueId),
    queryFn: () => commentApi.getComments(issueId),
  });
