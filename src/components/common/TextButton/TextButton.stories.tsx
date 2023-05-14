import { Meta, Story } from '@storybook/react';

import TextButton, { TextButtonProps } from './index';

export default {
  title: 'Common/TextButton',
  component: TextButton,
} as Meta;

const Template: Story<TextButtonProps> = args => <TextButton {...args}>TextButton</TextButton>;

export const Medium = Template.bind({});
Medium.args = {
  themeSize: 'm',
};

export const Small = Template.bind({});
Small.args = {
  themeSize: 's',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
