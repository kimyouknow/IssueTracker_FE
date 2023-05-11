import { ComponentMeta, Story } from '@storybook/react';

import Label, { LabelProps } from './index';

export default {
  title: 'common/Label',
  component: Label,
  args: {},
} as ComponentMeta<typeof Label>;

const Template: Story<LabelProps> = args => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default',
};

export const Custom = Template.bind({});
Custom.args = {
  text: 'Default',
  type: 'custom',
  backgroundColor: '#34C759',
  color: '#FF3B30',
};

export const DarkText = Template.bind({});
DarkText.args = {
  text: 'DarkText',
  type: 'dark',
};

export const LightText = Template.bind({});
LightText.args = {
  text: 'LightText',
  type: 'light',
};

export const Line = Template.bind({});
Line.args = {
  text: 'Line',
  type: 'line',
};
