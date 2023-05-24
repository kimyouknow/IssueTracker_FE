import { ComponentMeta, Story } from '@storybook/react';

import TextArea, { TextAreaProps } from './index';

export default {
  title: 'common/TextArea',
  component: TextArea,
  args: {},
} as ComponentMeta<typeof TextArea>;

const Template: Story<TextAreaProps> = args => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'textarea',
  label: '코멘트를 입력하세요',
  placeholder: '코멘트를 입력하세요',
};
