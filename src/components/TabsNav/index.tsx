'use client';

import { useGetLabels } from '@/api/queries/label.query';
import { useGetMilestones } from '@/api/queries/milestone.query';
import Icon from '@/components/common/Icon';
import { PAGE_URL } from '@/constant/pageUrl.constant';

import * as S from './TabsNav.style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabsNavProps {}

const TabsNav = () => {
  const labelQuery = useGetLabels();
  const milestoneQuery = useGetMilestones();

  let labelsCount = 0;
  let milestoneCount = 0;

  if (
    labelQuery.isLoading ||
    milestoneQuery.isLoading ||
    labelQuery.isError ||
    milestoneQuery.isError
  ) {
    labelsCount = 0;
    milestoneCount = 0;
  } else {
    labelsCount = labelQuery.data?.data.labels.length;
    milestoneCount = milestoneQuery.data.data.milestones.length;
  }

  return (
    <S.Container>
      <S.ButtonWrapper href={PAGE_URL.LABEL}>
        <Icon type="tag" />
        <span>레이블</span>
        <span>{labelsCount}</span>
      </S.ButtonWrapper>
      <S.ButtonWrapper href={PAGE_URL.MILESTONE}>
        <Icon type="mileStone" />
        <span>마일스톤</span>
        <span>{milestoneCount}</span>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default TabsNav;
