import Image from 'next/image';
import { ReactNode } from 'react';

import Icon from '@/components/Icon';
import { OptionsType } from '@/types/option.type';

import * as S from './DropDown.style';
import useDropDown from './useDropDown';

export interface DropDownProps {
  id: string;
  label: string;
  value: OptionsType[];
  options: OptionsType[];
  onChange: (event: { target: any; type?: any }) => void;
  onBlur?: (event: { target: any; type?: any }) => void;
  initMode?: boolean;
  left?: number;
  top?: number;
  isCheckAvailable?: boolean;
  Indicator?: ReactNode;
}

const DropDown = ({
  id,
  label,
  value,
  options,
  onChange,
  onBlur,
  initMode = false,
  left = 0,
  top = 0,
  isCheckAvailable = true,
  Indicator,
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
        {Indicator ? (
          Indicator
        ) : (
          <>
            Filter
            {isDropdownOpen ? <Icon type="chevronUp" /> : <Icon type="chevronDown" />}
          </>
        )}
      </S.Indicator>
      {isDropdownOpen && (
        <S.Panels left={left} top={top}>
          <S.PanelsHeader>{label}</S.PanelsHeader>
          {options.map(({ id, label, iconSrc, bgColor }) => (
            <S.Option
              key={id}
              onClick={event => {
                event.stopPropagation();
                handleClickOption(id);
              }}
            >
              <S.OptionInfo isCheckAvailable={isCheckAvailable}>
                {iconSrc && <Image src={iconSrc} alt="label" width={20} height={20} />}
                {bgColor && <S.ColorIcon bgColor={bgColor} />}
                <span>{label}</span>
              </S.OptionInfo>

              {isCheckAvailable &&
                (isSelected(id) ? <Icon type="circleCheck" /> : <Icon type="circle" />)}
            </S.Option>
          ))}
        </S.Panels>
      )}
    </S.Container>
  );
};

export default DropDown;
