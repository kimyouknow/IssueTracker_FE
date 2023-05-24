import { useGetMembers } from '@/api/queries/member.query';
import DropDown from '@/components/common/DropDown';
import { parseToAuthorOptions } from '@/services/options.service';
import { OptionsType } from '@/types/option.type';

import { ChildDropDownFilterProps } from '../DropdownFilter.type';

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
