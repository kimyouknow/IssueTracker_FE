import AssignDropdownFilter from '@/modules/DropdownFilter/ChildrenDropdownFilter/Assign.DropdownFilter';
import AuthorDropdownFilter from '@/modules/DropdownFilter/ChildrenDropdownFilter/Author.DropdownFilter';
import LabelDropdownFilter from '@/modules/DropdownFilter/ChildrenDropdownFilter/Label.DropdownFilter';
import LoggedInUserDropdownFilter from '@/modules/DropdownFilter/ChildrenDropdownFilter/LoggedInUser.DropdownFilter';
import MilestoneDropdownFilter from '@/modules/DropdownFilter/ChildrenDropdownFilter/Milestone.DropdownFilter';

const ChildrenDropdownFilter = {
  loggedInUser: LoggedInUserDropdownFilter,
  assign: AssignDropdownFilter,
  author: AuthorDropdownFilter,
  label: LabelDropdownFilter,
  milestone: MilestoneDropdownFilter,
};

export default ChildrenDropdownFilter;
