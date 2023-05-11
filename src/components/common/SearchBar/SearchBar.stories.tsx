import { ComponentMeta, Story } from '@storybook/react';

import SearchBar, { SearchBarProps } from './index';

export default {
  title: 'common/SearchBar',
  component: SearchBar,
  args: {},
} as ComponentMeta<typeof SearchBar>;

const Template: Story<SearchBarProps> = args => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeHolder: 'Default PlaceHolder',
  onChange: (v: string) => {
    console.log('Input Value', v);
  },
};
