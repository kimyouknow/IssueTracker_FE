import Icon from '@/components/common/Icon';

import * as S from './DropDown.style';
import useDropDown from './useDropDown';

export interface OptionsType {
  id: string;
  label: string;
  value: string;
}

export interface DropDownProps {
  id: string;
  label: string;
  value: OptionsType[];
  options: OptionsType[];
  onChange: (event: { target: any; type?: any }) => void;
  onBlur?: (event: { target: any; type?: any }) => void;
  initMode?: boolean;
}

const DropDown = ({
  id,
  label,
  value,
  options,
  onChange,
  onBlur,
  initMode = false,
  ...rest
}: DropDownProps) => {
  const { containerRef, isDropdownOpen, handleClickDropdownTrigger, openDropdown } =
    useDropDown(initMode);

  const isSelected = (id: string) => value.find(v => v.id === id) !== undefined;

  const handleClickOption = (_id: string) => {
    const updatedValue = isSelected(_id)
      ? value.filter(v => v.id !== _id)
      : [...value, options.find(({ id }) => id === _id)!];
    onChange({
      target: {
        id,
        value: updatedValue,
      },
    });
    onBlur &&
      onBlur({
        target: {
          id,
          value: updatedValue,
        },
      });
  };

  return (
    <S.Container ref={containerRef} {...rest}>
      <S.Indicator onClick={handleClickDropdownTrigger}>
        Filter
        {isDropdownOpen ? <Icon type="chevronUp" /> : <Icon type="chevronDown" />}
      </S.Indicator>
      {isDropdownOpen && (
        <S.Panels>
          <S.PanelsHeader>{label}</S.PanelsHeader>
          {options.map(({ id, label }) => (
            <S.Option
              key={id}
              onClick={event => {
                event.stopPropagation();
                handleClickOption(id);
              }}
            >
              {label}
              {isSelected(id) ? <Icon type="circleCheck" /> : <Icon type="circle" />}
            </S.Option>
          ))}
        </S.Panels>
      )}
    </S.Container>
  );
};

export default DropDown;