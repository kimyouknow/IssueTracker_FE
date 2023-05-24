import { ComponentMeta, Story } from '@storybook/react';

import handlers from '@/mocks/handlers';

import TabsNav, { TabsNavProps } from './index';

export default {
  title: 'domain/TabsNav',
  component: TabsNav,
  args: {},
  parameters: {
    msw: {
      handlers,
    },
  },
} as ComponentMeta<typeof TabsNav>;

const Template: Story<TabsNavProps> = args => <TabsNav {...args} />;

export const Default = Template.bind({});
Default.args = {};
