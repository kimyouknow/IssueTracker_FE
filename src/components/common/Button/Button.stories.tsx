import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from './index';

export default {
  title: 'Common/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args}>Button</Button>;

export const Large = Template.bind({});
Large.args = {
  themeSize: 'l',
};

export const Medium = Template.bind({});
Medium.args = {
  themeSize: 'm',
};

export const Small = Template.bind({});
Small.args = {
  themeSize: 's',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonStyle: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  buttonStyle: 'secondary',
  disabled: true,
};
