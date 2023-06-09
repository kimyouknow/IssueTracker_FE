import { ComponentMeta, Story } from '@storybook/react';

import OpenLabel, { OpenLabelProps } from './index';

export default {
  title: 'domain/OpenLabel',
  component: OpenLabel,
  args: {},
} as ComponentMeta<typeof OpenLabel>;

const Template: Story<OpenLabelProps> = args => <OpenLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  openCount: 10,
  closeCount: 10,
};

export const Close = Template.bind({});
Close.args = {
  isOpen: false,
  openCount: 10,
  closeCount: 10,
};
