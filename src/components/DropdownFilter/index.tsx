import ChildrenDropdownFilter from '@/components/DropdownFilter/ChildrenDropdownFilter';

import { ChildDropDownFilterProps, DropDownFilterType } from './DropdownFilter.type';

export interface DropdownFilterProps extends ChildDropDownFilterProps {
  filterType: DropDownFilterType;
}

const DropdownFilter = ({
  filterType,
  value,
  onChange,
  left,
  top,
  initMode,
}: DropdownFilterProps) => {
  // atom이 모두 달라서 종류마다 컴폰넌트를 만들어야 했다.
  const TargetDropdownFilter = ChildrenDropdownFilter[filterType];
  return (
    <TargetDropdownFilter
      value={value}
      onChange={onChange}
      left={left}
      top={top}
      initMode={initMode}
    />
  );
};

export default DropdownFilter;
