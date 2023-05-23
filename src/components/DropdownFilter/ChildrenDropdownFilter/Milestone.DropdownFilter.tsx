import { useGetMilestones } from '@/api/queries/milestone.query';
import DropDown, { OptionsType } from '@/components/common/DropDown';

import { ChildDropDownFilterProps, parseToMilestoneOptions } from '../DropdownFilter.type';

const MilestoneDropdownFilter = ({ ...rest }: ChildDropDownFilterProps) => {
  const { data, isLoading, isError } = useGetMilestones();

  let options: OptionsType[] = [];

  if (isLoading || isError) {
    options = [];
  } else {
    options = parseToMilestoneOptions(data.data.milestones);
  }

  return (
    <DropDown id="MilestoneDropdownFilter" label="마일스톤 필터" options={options} {...rest} />
  );
};

export default MilestoneDropdownFilter;
