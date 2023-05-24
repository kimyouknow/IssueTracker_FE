import { useGetLabels } from '@/api/queries/label.query';
import DropDown from '@/components/common/DropDown';
import { parseToLabelOptions } from '@/services/options.service';
import { OptionsType } from '@/types/option.type';

import { ChildDropDownFilterProps } from '../DropdownFilter.type';

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
