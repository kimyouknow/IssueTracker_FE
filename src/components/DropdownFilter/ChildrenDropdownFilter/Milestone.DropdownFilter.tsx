import { useGetMilestones } from '@/api/queries/milestone.query';
import DropDown from '@/components/common/DropDown';
import { parseToMilestoneOptions } from '@/services/options.service';
import { OptionsType } from '@/types/option.type';

import { ChildDropDownFilterProps } from '../DropdownFilter.type';

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
