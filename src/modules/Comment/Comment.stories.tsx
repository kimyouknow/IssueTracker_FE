import { ComponentMeta, Story } from '@storybook/react';

import { createRandomComments } from '@/mocks/comment/comment.mock';

import Comment, { CommentProps } from './index';

export default {
  title: 'domain/Comment',
  component: Comment,
  args: {},
} as ComponentMeta<typeof Comment>;

const Template: Story<CommentProps> = args => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...createRandomComments(1)[0],
};
