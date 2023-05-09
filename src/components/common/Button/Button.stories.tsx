import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from './index';

export default {
  title: 'Common/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button',
};
