import { ComponentMeta, Story } from '@storybook/react';

import DateLabel, { DateLabelProps } from './index';

export default {
  title: 'common/DateLabel',
  component: DateLabel,
  args: {},
} as ComponentMeta<typeof DateLabel>;

const Template: Story<DateLabelProps> = args => <DateLabel {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DateArg = Template.bind({});
DateArg.args = {
  date: new Date(),
};

export const StringArg = Template.bind({});
StringArg.args = {
  date: '2023-5-1',
};

export const NumberArg = Template.bind({});
StringArg.args = {
  date: 20230501,
};
