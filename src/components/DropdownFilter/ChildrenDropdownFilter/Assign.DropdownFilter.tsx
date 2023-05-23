import { useGetMembers } from '@/api/queries/member.query';
import DropDown, { OptionsType } from '@/components/common/DropDown';

import { ChildDropDownFilterProps, parseToAssignOptions } from '../DropdownFilter.type';

const AssignDropdownFilter = ({ ...rest }: ChildDropDownFilterProps) => {
  const { data, isLoading, isError } = useGetMembers();

  let options: OptionsType[] = [];

  if (isLoading || isError) {
    options = [];
  } else {
    options = parseToAssignOptions(data.data.members);
  }

  return <DropDown id="AssignDropdownFilter" label="담당자 필터" options={options} {...rest} />;
};

export default AssignDropdownFilter;
