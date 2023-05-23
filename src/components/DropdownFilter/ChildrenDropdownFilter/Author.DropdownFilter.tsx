import { useGetMembers } from '@/api/queries/member.query';
import DropDown, { OptionsType } from '@/components/common/DropDown';

import { ChildDropDownFilterProps, parseToAuthorOptions } from '../DropdownFilter.type';

const AuthorDropdownFilter = ({ ...rest }: ChildDropDownFilterProps) => {
  const { data, isLoading, isError } = useGetMembers();

  let options: OptionsType[] = [];

  if (isLoading || isError) {
    options = [];
  } else {
    options = parseToAuthorOptions(data.data.members);
  }

  return <DropDown id="AuthorDropdownFilter" label="작성자 필터" options={options} {...rest} />;
};

export default AuthorDropdownFilter;
