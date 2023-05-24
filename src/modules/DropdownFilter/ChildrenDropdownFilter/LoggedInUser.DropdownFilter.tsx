import DropDown from '@/components/DropDown';
import { loggedInUserOptions } from '@/services/options.service';

import { ChildDropDownFilterProps } from '../DropdownFilter.type';

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
