import { ComponentMeta, Story } from '@storybook/react';

import handlers from '@/mocks/handlers';
import { createRandomLabels } from '@/mocks/label/label.mock';
import { createRandomMilestones } from '@/mocks/milestone/milestone.mock';
import { createRandomMembers } from '@/mocks/user/user.mock';

import SideBar, { SideBarProps } from './index';

export default {
  title: 'domain/SideBar',
  component: SideBar,
  args: {},
  parameters: {
    msw: {
      handlers,
    },
  },
} as ComponentMeta<typeof SideBar>;

const MOCK_OPTIONS_ASSIGNS = createRandomMembers(3);

const MOCK_OPTIONS_LABELS = createRandomLabels(3);

const MOCK_OPTIONS_MILESTONES = createRandomMilestones(3);

const Template: Story<SideBarProps> = args => {
  const handleDropDownChange = (event: { target: any; type?: any }) => {
    const { value: newSelectedOptions } = event.target;
  };

  return <SideBar {...args} onChange={handleDropDownChange} />;
};

export const Default = Template.bind({});
Default.args = {
  assigns: [],
  labels: [],
  milestones: [],
};

export const WithSelectedOPtions = Template.bind({});
WithSelectedOPtions.args = {
  assigns: MOCK_OPTIONS_ASSIGNS,
  labels: MOCK_OPTIONS_LABELS,
  milestones: MOCK_OPTIONS_MILESTONES,
};
