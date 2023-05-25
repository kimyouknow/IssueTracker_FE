import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { BaseResponseType, ErrorResponseType, GetIssueType } from '@/api/config/api.types';
import issueApi from '@/api/domain/issue.api';
import { issueQueryKey } from '@/api/queries/query.type';

export const useGetIssues = () =>
  useQuery<BaseResponseType<GetIssueType>, AxiosError<ErrorResponseType>>({
    queryKey: issueQueryKey.issues,
    queryFn: () => issueApi.getIssues(),
  });
