import DropDown from '@/components/common/DropDown';

import { ChildDropDownFilterProps, loggedInUserOptions } from '../DropdownFilter.type';

const LoggedInUserDropdownFilter = ({ ...rest }: ChildDropDownFilterProps) => {
  return (
    <DropDown
      id="LoggedInUserDropdownFilter"
      label="이슈필터"
      options={loggedInUserOptions}
      {...rest}
    />
  );
};

export default LoggedInUserDropdownFilter;
