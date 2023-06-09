import { ComponentMeta, Story } from '@storybook/react';

import handlers from '@/mocks/handlers';
import CommentList, { CommentListProps } from '@/modules/CommentList';

export default {
  title: 'domain/CommentList',
  component: CommentList,
  args: {},
  parameters: {
    msw: {
      handlers,
    },
  },
} as ComponentMeta<typeof CommentList>;

const Template: Story<CommentListProps> = args => <CommentList {...args} />;

export const Default = Template.bind({});
Default.args = {
  issueId: 'temp-unique-issue-id',
};
