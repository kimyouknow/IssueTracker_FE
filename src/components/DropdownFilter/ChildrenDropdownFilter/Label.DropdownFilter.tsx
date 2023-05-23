import { useGetLabels } from '@/api/queries/label.query';
import DropDown, { OptionsType } from '@/components/common/DropDown';

import { ChildDropDownFilterProps, parseToLabelOptions } from '../DropdownFilter.type';

const LabelDropdownFilter = ({ ...rest }: ChildDropDownFilterProps) => {
  const { data, isLoading, isError } = useGetLabels();

  let options: OptionsType[] = [];

  if (isLoading || isError) {
    options = [];
  } else {
    options = parseToLabelOptions(data.data.labels);
  }

  return <DropDown id="LabelDropdownFilter" label="레이블 필터" options={options} {...rest} />;
};

export default LabelDropdownFilter;
