import { ComponentMeta, Story } from '@storybook/react';

import Switch, { SwitchProps } from './index';

export default {
  title: 'Common/Switch',
  component: Switch,
  args: {},
} as ComponentMeta<typeof Switch>;

const Template: Story<SwitchProps> = args => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  initValue: 'switch1',
  leftLabel: 'switch1',
  rightLabel: 'switch2',
  onChange: (v: string) => {
    console.log('Change to', v);
  },
};
