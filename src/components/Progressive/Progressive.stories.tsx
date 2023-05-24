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
  openIssueCount: 10,
  closeIssueCount: 12,
};

export const AllComplete = Template.bind({});
AllComplete.args = {
  openIssueCount: 0,
  closeIssueCount: 10,
};

export const NoIssueCount = Template.bind({});
NoIssueCount.args = {
  openIssueCount: 0,
  closeIssueCount: 0,
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  openIssueCount: 11,
  closeIssueCount: 10,
  type: 'withMessage',
};
