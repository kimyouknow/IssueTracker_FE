import Image from 'next/image';

import Icon from '@/components/Icon';
import Label from '@/components/Label';
import Progressive from '@/components/Progressive';
import DropdownFilter from '@/modules/DropdownFilter';
import {
  parseToAssignOptions,
  parseToLabelOptions,
  parseToMilestoneOptions,
} from '@/services/options.service';
import { AssignType, LabelType, MileStoneType } from '@/types/domain.type';

import * as S from './SideBar.style';

export interface SideBarProps {
  onChange: (prop: any) => void;
  assigns: AssignType[];
  labels: LabelType[];
  milestones: MileStoneType[];
}

// TODO: onchange -> rhf useContext 사용하는 방법으로 수정하기
const SideBar = ({ onChange, assigns, labels, milestones }: SideBarProps) => {
  return (
    <S.Container>
      <S.FilterWrapper>
        <S.FilterWrapperHeader>
          <S.FilterTitle>담당자</S.FilterTitle>
          <DropdownFilter
            filterType="assign"
            onChange={onChange}
            Indicator={<Icon type="plus" />}
            left={-200}
            value={parseToAssignOptions(assigns, false)}
          />
        </S.FilterWrapperHeader>
        <S.FilterWrapperBody>
          {assigns.map(({ id, nickname, profileUrl }) => (
            <S.AssignElement key={id}>
              <Image src={profileUrl} width={44} height={44} alt={nickname} />
              <span>{nickname}</span>
            </S.AssignElement>
          ))}
        </S.FilterWrapperBody>
      </S.FilterWrapper>
      <S.FilterWrapper>
        <S.FilterWrapperHeader>
          <S.FilterTitle>레이블</S.FilterTitle>
          <DropdownFilter
            filterType="label"
            onChange={onChange}
            Indicator={<Icon type="plus" />}
            left={-200}
            value={parseToLabelOptions(labels, false)}
          />
        </S.FilterWrapperHeader>
        <S.FilterWrapperBody>
          {labels.map(({ id, title, color, bgColor }) => (
            <Label key={id} type="custom" text={title} color={color} backgroundColor={bgColor} />
          ))}
        </S.FilterWrapperBody>
      </S.FilterWrapper>
      <S.FilterWrapper>
        <S.FilterWrapperHeader>
          <S.FilterTitle>마일스톤</S.FilterTitle>
          <DropdownFilter
            filterType="milestone"
            onChange={onChange}
            Indicator={<Icon type="plus" />}
            left={-200}
            value={parseToMilestoneOptions(milestones, false)}
          />
        </S.FilterWrapperHeader>
        <S.FilterWrapperBody>
          {milestones.map(({ id, openIssueCount, closeIssueCount }) => (
            <Progressive
              key={id}
              openIssueCount={openIssueCount}
              closeIssueCount={closeIssueCount}
            />
          ))}
        </S.FilterWrapperBody>
      </S.FilterWrapper>
    </S.Container>
  );
};

export default SideBar;
