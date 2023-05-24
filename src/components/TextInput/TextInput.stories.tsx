import { ComponentMeta, Story } from '@storybook/react';

import TextInput, { TextInputProps } from './index';

export default {
  title: 'common/TextInput',
  component: TextInput,
  args: {},
} as ComponentMeta<typeof TextInput>;

const defaultArgs = {
  label: '아이디',
  id: 'textInput',
  placeholder: '아이디',
};

const Template: Story<TextInputProps> = args => <TextInput {...defaultArgs} {...args} />;

export const Large = Template.bind({});
Large.args = {
  themeSize: 'l',
};

export const Medium = Template.bind({});
Medium.args = {
  themeSize: 'm',
};

export const Small = Template.bind({});
Small.args = {
  themeSize: 's',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Success = Template.bind({});
Success.args = {
  isSuccess: true,
  validate: (v: string) => '',
  placeholder: '성공 UI!!!',
};

export const Error = Template.bind({});
Error.args = {
  validate: (v: string) => '에러 메시지가 보이네요!',
  placeholder: '인터렉션 이후 에러 UI로 변경돼요!',
};

export const ErrorSmall = Template.bind({});
ErrorSmall.args = {
  themeSize: 's',
  validate: (v: string) => '에러 메시지가 보이네요!',
  placeholder: '인터렉션 이후 에러 UI로 변경돼요!',
};
