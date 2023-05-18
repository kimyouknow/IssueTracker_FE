import { ComponentMeta, Story } from '@storybook/react';

import SearchBar, { SearchBarProps } from './index';

export default {
  title: 'domain/SearchBar',
  component: SearchBar,
  args: {},
} as ComponentMeta<typeof SearchBar>;

const Template: Story<SearchBarProps> = args => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
