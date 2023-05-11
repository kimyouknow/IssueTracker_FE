import { useState } from 'react';

import * as S from './Switch.style';

export interface SwitchProps {
  initValue: string;
  leftLabel: string;
  rightLabel: string;
  onChange: (v: string) => void;
}

const Switch = ({ initValue, leftLabel, rightLabel, onChange }: SwitchProps) => {
  const [active, setActive] = useState(initValue === leftLabel);

  const toggleMode = () => {
    setActive(prev => !prev);
    onChange(active ? rightLabel : leftLabel);
  };
  return (
    <S.Container onClick={toggleMode}>
      <S.OptionButton data-option={active}>{leftLabel}</S.OptionButton>
      <S.OptionButton data-option={!active}>{rightLabel}</S.OptionButton>
    </S.Container>
  );
};

export default Switch;
