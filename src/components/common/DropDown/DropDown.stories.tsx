import { faker } from '@faker-js/faker';
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
  { id: '필터1', label: '필터1' },
  { id: '필터2', label: '필터2' },
  { id: '필터3', label: '필터3' },
  { id: '필터4', label: '필터4' },
];

const MOCK_OPTIONS_IMAGE = MOCK_OPTIONS.map(v => ({ ...v, iconSrc: faker.image.avatar() }));
const MOCK_OPTIONS_COLOR = MOCK_OPTIONS.map(v => ({
  ...v,
  bgColor: faker.color.rgb({ format: 'hex', casing: 'lower' }),
}));

const Template: Story<DropDownProps> = args => {
  const [selectedOptions, setSelectedOptions] = useState<OptionsType[]>(args.value || []);

  const handleDropDownChange = (event: { target: any; type?: any }) => {
    const { value: newSelectedOptions } = event.target;
    setSelectedOptions(newSelectedOptions);
  };

  return <DropDown {...args} value={selectedOptions} onChange={handleDropDownChange} />;
};

export const Default = Template.bind({});
Default.args = {
  left: 20,
};

export const Open = Template.bind({});
Open.args = {
  initMode: true,
  left: 20,
  options: MOCK_OPTIONS,
};

export const OpenWithImageIcon = Template.bind({});
OpenWithImageIcon.args = {
  initMode: true,
  left: 20,
  options: MOCK_OPTIONS_IMAGE,
};

export const OpenWithBgColor = Template.bind({});
OpenWithBgColor.args = {
  initMode: true,
  left: 20,
  options: MOCK_OPTIONS_COLOR,
};

export const OpenWithNoCheck = Template.bind({});
OpenWithNoCheck.args = {
  initMode: true,
  left: 20,
  options: MOCK_OPTIONS,
  isCheckAvailable: false,
};

export const InitSelected = Template.bind({});
InitSelected.args = {
  value: MOCK_OPTIONS.slice(0, 2),
  initMode: true,
  left: 20,
  options: MOCK_OPTIONS,
};
