import { ComponentMeta, Story } from '@storybook/react';

import DateInput, { DateInputProps } from './index';

export default {
  title: 'common/DateInput',
  component: DateInput,
  args: {},
} as ComponentMeta<typeof DateInput>;

const Template: Story<DateInputProps> = args => <DateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Date Input',
  id: 'dateInput',
};
