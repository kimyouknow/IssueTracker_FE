import { ComponentMeta, Story } from '@storybook/react';

import ProfileImage, { ProfileImageProps } from './index';

export default {
  title: 'common/ProfileImage',
  component: ProfileImage,
  args: {},
} as ComponentMeta<typeof ProfileImage>;

const Template: Story<ProfileImageProps> = args => <ProfileImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'm',
  alt: ' profile image',
  src: 'https://avatars.githubusercontent.com/u/71386219?v=4',
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: 'xl',
  alt: ' profile image',
  src: 'https://avatars.githubusercontent.com/u/71386219?v=4',
};

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  alt: ' profile image',
  src: 'https://avatars.githubusercontent.com/u/71386219?v=4',
};
