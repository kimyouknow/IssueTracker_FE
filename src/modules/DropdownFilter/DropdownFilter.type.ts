import { DropDownProps } from '@/components/DropDown';

export type DropDownFilterType = 'loggedInUser' | 'author' | 'label' | 'milestone' | 'assign';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChildDropDownFilterProps extends Omit<DropDownProps, 'id' | 'label' | 'options'> {}
