import { ComponentMeta, Story } from '@storybook/react';

import Progressive, { ProgressiveProps } from './index';

export default {
  title: 'common/Progressive',
  component: Progressive,
  args: {},
} as ComponentMeta<typeof Progressive>;

const Template: Story<ProgressiveProps> = args => <Progressive {...args} />;

export const Default = Template.bind({});
Default.args = {
  rate: 55,
};
