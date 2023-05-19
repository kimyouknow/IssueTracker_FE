import { ComponentMeta, Story } from '@storybook/react';
import { useState } from 'react';

import DropDown, { DropDownProps, OptionsType } from './index';

export default {
  title: 'common/DropDown',
  component: DropDown,
  args: {
    id: 'dropdown',
    label: '필터이름',
  },
} as ComponentMeta<typeof DropDown>;

const MOCK_OPTIONS = [
  { id: '필터1', label: '필터1', value: '필터1' },
  { id: '필터2', label: '필터2', value: '필터2' },
  { id: '필터3', label: '필터3', value: '필터3' },
  { id: '필터4', label: '필터4', value: '필터4' },
];

const Template: Story<DropDownProps> = args => {
  const [selectedOptions, setSelectedOptions] = useState<OptionsType[]>(args.value || []);

  const handleDropDownChange = (event: { target: any; type?: any }) => {
    const { value: newSelectedOptions } = event.target;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <DropDown
      {...args}
      value={selectedOptions}
      options={MOCK_OPTIONS}
      onChange={handleDropDownChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  left: 20,
};

export const Open = Template.bind({});
Open.args = {
  initMode: true,
  left: 20,
};

export const InitSelected = Template.bind({});
InitSelected.args = {
  value: MOCK_OPTIONS.slice(0, 2),
  initMode: true,
  left: 20,
};
