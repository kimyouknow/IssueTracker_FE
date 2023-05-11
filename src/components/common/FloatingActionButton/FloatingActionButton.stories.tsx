import { ComponentMeta, Story } from '@storybook/react';

import FloatingActionButton, { FloatingActionButtonProps } from './index';

export default {
  title: 'common/FloatingActionButton',
  component: FloatingActionButton,
  args: {},
} as ComponentMeta<typeof FloatingActionButton>;

const Template: Story<FloatingActionButtonProps> = args => <FloatingActionButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
};
