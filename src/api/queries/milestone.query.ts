import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { BaseResponseType, ErrorResponseType, GetMileStonesType } from '@/api/config/api.types';
import mileStoneApi from '@/api/domain/milestone.api';
import { milestoneQueryKey } from '@/api/queries/query.type';

export const useGetMilestones = () =>
  useQuery<BaseResponseType<GetMileStonesType>, AxiosError<ErrorResponseType>>({
    queryKey: milestoneQueryKey.milestone,
    queryFn: () => mileStoneApi.getMileStones(),
  });
