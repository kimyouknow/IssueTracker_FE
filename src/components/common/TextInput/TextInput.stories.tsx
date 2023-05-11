import { ComponentMeta, Story } from '@storybook/react';

import TextInput, { TextInputProps } from './index';

export default {
  title: 'common/TextInput',
  component: TextInput,
  args: {},
} as ComponentMeta<typeof TextInput>;

const Template: Story<TextInputProps> = args => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  id: 'text',
};
