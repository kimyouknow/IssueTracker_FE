import { SVGAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { MdKeyboardVoice } from 'react-icons/md';
import {
  TbSearch,
  TbAlertCircle,
  TbArchive,
  TbCircleCheck,
  TbPlus,
  TbCircle,
  TbX,
  TbRefresh,
  TbCalendar,
  TbTag,
  TbEdit,
  TbTrash,
  TbMoodSmile,
  TbPaperclip,
  TbSignRight,
  TbSquareRoundedChevronDownFilled,
  TbPlayerStop,
  TbPlayerStopFilled,
  TbChevronDown,
  TbChevronUp,
  TbChevronLeft,
  TbChevronRight,
} from 'react-icons/tb';

const ICON = {
  search: (props: IconBaseProps) => <TbSearch {...props} />,
  alertCircle: (props: IconBaseProps) => <TbAlertCircle {...props} />,
  archive: (props: IconBaseProps) => <TbArchive {...props} />,
  circleCheck: (props: IconBaseProps) => <TbCircleCheck {...props} />,
  plus: (props: IconBaseProps) => <TbPlus {...props} />,
  circle: (props: IconBaseProps) => <TbCircle {...props} />,
  x: (props: IconBaseProps) => <TbX {...props} />,
  refresh: (props: IconBaseProps) => <TbRefresh {...props} />,
  calendar: (props: IconBaseProps) => <TbCalendar {...props} />,
  tag: (props: IconBaseProps) => <TbTag {...props} />,
  edit: (props: IconBaseProps) => <TbEdit {...props} />,
  trash: (props: IconBaseProps) => <TbTrash {...props} />,
  smile: (props: IconBaseProps) => <TbMoodSmile {...props} />,
  paperClip: (props: IconBaseProps) => <TbPaperclip {...props} />,
  mileStone: (props: IconBaseProps) => <TbSignRight {...props} />,
  emptySquare: (props: IconBaseProps) => <TbPlayerStop {...props} />,
  filledSquare: (props: IconBaseProps) => <TbPlayerStopFilled {...props} />,
  checkedFilledSquare: (props: IconBaseProps) => <TbSquareRoundedChevronDownFilled {...props} />,
  voice: (props: IconBaseProps) => <MdKeyboardVoice {...props} />,
  chevronDown: (props: IconBaseProps) => <TbChevronDown {...props} />,
  chevronUp: (props: IconBaseProps) => <TbChevronUp {...props} />,
  chevronRight: (props: IconBaseProps) => <TbChevronLeft {...props} />,
  chevronLeft: (props: IconBaseProps) => <TbChevronRight {...props} />,
};

const SIZE = {
  xl: '32',
  l: '24',
  m: '18',
  s: '14',
  xs: '10',
};

export interface IconProps extends SVGAttributes<SVGElement> {
  type: keyof typeof ICON;
  size?: keyof typeof SIZE;
}

const Icon = ({ type, size = 'm' }: IconProps) => {
  return <>{ICON[type]({ size: SIZE[size] })}</>;
};

export default Icon;
