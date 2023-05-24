import { ComponentMeta, Story } from '@storybook/react';

import Icon, { IconProps } from './index';

export default {
  title: 'common/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'search',
};

export const XLarge = Template.bind({});
XLarge.args = {
  type: 'search',
  size: 'xl',
};

export const Large = Template.bind({});
Large.args = {
  type: 'search',
  size: 'l',
};

export const Medium = Template.bind({});
Medium.args = {
  type: 'search',
  size: 'm',
};

export const Small = Template.bind({});
Small.args = {
  type: 'search',
  size: 's',
};

export const XSmall = Template.bind({});
XSmall.args = {
  type: 'search',
  size: 'xs',
};
