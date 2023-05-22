import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { BaseResponseType, ErrorResponseType, GetLabelsType } from '@/api/config/api.types';
import labelApi from '@/api/domain/label.api';
import { labelQueryKey } from '@/api/queries/query.type';

export const useGetLabels = () =>
  useQuery<BaseResponseType<GetLabelsType>, AxiosError<ErrorResponseType>>({
    queryKey: labelQueryKey.label,
    queryFn: () => labelApi.getLabels(),
  });
