import { ComponentMeta, Story } from '@storybook/react';
import { useState } from 'react';

import { OptionsType } from '@/components/common/DropDown';
import handlers from '@/mocks/handlers';

import DropdownFilter, { DropdownFilterProps } from './index';

export default {
  title: 'domain/DropdownFilter',
  component: DropdownFilter,
  args: {},
  parameters: {
    msw: {
      handlers,
    },
  },
} as ComponentMeta<typeof DropdownFilter>;

const Template: Story<DropdownFilterProps> = args => {
  const [selectedOptions, setSelectedOptions] = useState<OptionsType[]>(args.value || []);

  const handleDropDownChange = (event: { target: any; type?: any }) => {
    const { value: newSelectedOptions } = event.target;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <DropdownFilter
      {...args}
      value={selectedOptions}
      onChange={handleDropDownChange}
      left={20}
      initMode={true}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  filterType: 'loggedInUser',
};

export const LoggingsUser = Template.bind({});
LoggingsUser.args = {
  filterType: 'loggedInUser',
};

export const Assign = Template.bind({});
Assign.args = {
  filterType: 'assign',
};

export const Author = Template.bind({});
Author.args = {
  filterType: 'author',
};

export const Label = Template.bind({});
Label.args = {
  filterType: 'label',
};

export const Milestone = Template.bind({});
Milestone.args = {
  filterType: 'milestone',
};
