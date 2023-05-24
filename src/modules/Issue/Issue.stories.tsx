import styled from '@emotion/styled';
import { ComponentMeta, Story } from '@storybook/react';

import { createRandomIssues } from '@/mocks/issue/issue.mock';

import Issue, { IssueProps } from './index';

export default {
  title: 'domain/Issue',
  component: Issue,
  args: {},
} as ComponentMeta<typeof Issue>;

const Template: Story<IssueProps> = args => (
  <TemplateContainer>
    <Issue {...args} />
  </TemplateContainer>
);

const TemplateContainer = styled.div`
  width: 1280px;
  border: 1px solid ${({ theme: { colors } }) => colors.grayScale.line};
`;

export const Default = Template.bind({});
Default.args = {
  ...createRandomIssues(1)[0],
  isChecked: true,
};
