import { ComponentMeta, Story } from '@storybook/react';

import CheckInput, { CheckInputProps } from './index';

export default {
  title: 'common/CheckInput',
  component: CheckInput,
  args: {},
} as ComponentMeta<typeof CheckInput>;

const Template: Story<CheckInputProps> = args => <CheckInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: true,
};

export const NoChecked = Template.bind({});
NoChecked.args = {
  checked: false,
};
