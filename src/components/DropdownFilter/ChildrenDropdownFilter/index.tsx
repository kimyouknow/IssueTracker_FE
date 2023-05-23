import AssignDropdownFilter from '@/components/DropdownFilter/ChildrenDropdownFilter/Assign.DropdownFilter';
import AuthorDropdownFilter from '@/components/DropdownFilter/ChildrenDropdownFilter/Author.DropdownFilter';
import LabelDropdownFilter from '@/components/DropdownFilter/ChildrenDropdownFilter/Label.DropdownFilter';
import LoggedInUserDropdownFilter from '@/components/DropdownFilter/ChildrenDropdownFilter/LoggedInUser.DropdownFilter';
import MilestoneDropdownFilter from '@/components/DropdownFilter/ChildrenDropdownFilter/Milestone.DropdownFilter';

const ChildrenDropdownFilter = {
  loggedInUser: LoggedInUserDropdownFilter,
  assign: AssignDropdownFilter,
  author: AuthorDropdownFilter,
  label: LabelDropdownFilter,
  milestone: MilestoneDropdownFilter,
};

export default ChildrenDropdownFilter;
