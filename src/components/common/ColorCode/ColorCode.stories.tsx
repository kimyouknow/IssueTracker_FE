import { ComponentMeta, Story } from '@storybook/react';

import ColorCode, { ColorCodeProps } from './index';

export default {
  title: 'common/ColorCode',
  component: ColorCode,
  args: {},
} as ComponentMeta<typeof ColorCode>;

const defaultArgs = {
  label: '색상',
  id: 'Color Input',
  placeholder: '색상',
};

const Template: Story<ColorCodeProps> = args => <ColorCode {...defaultArgs} {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
  label: 'Non HEX',
};
