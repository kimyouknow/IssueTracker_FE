import { ComponentMeta, Story } from '@storybook/react';

import { DateType } from '@/utils/date.util';

import DateInput, { DateInputProps } from './index';

export default {
  title: 'common/DateInput',
  component: DateInput,
  args: {},
} as ComponentMeta<typeof DateInput>;

const Template: Story<DateInputProps> = args => <DateInput {...args} />;

export const Large = Template.bind({});
Large.args = {
  id: 'dateInput',
  label: '완료일(선택)',
  value: '',
  onChange: (value: DateType) => {
    console.log(value);
  },
};

export const Small = Template.bind({});
Small.args = {
  id: 'dateInput',
  label: '완료일(선택)',
  themeSize: 's',
  value: '',
  onChange: (value: DateType) => {
    console.log(value);
  },
};

export const ErrorSmall = Template.bind({});
ErrorSmall.args = {
  id: 'dateInput',
  label: '완료일(선택)',
  themeSize: 's',
  value: '',
  onChange: (value: DateType) => {
    console.log(value);
  },
};
