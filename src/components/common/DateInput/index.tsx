import { useState } from 'react';

import { formatDateYYMMDD } from '@/utils/date.util';
import { DateType } from '@/utils/date.util';

import * as S from './DateInput.style';

export interface DateInputProps {
  label: string;
  id: string;
  value: DateType;
  onChange: (value: DateType) => void;
}

const validateEachTowDigitOrLess = (str: string) => str.split('-').some(v => v.length > 2);

const DateInput = ({ label, id, value, onChange, ...rest }: DateInputProps) => {
  const [year, setYear] = useState(formatDateYYMMDD(value).slice(0, 2));
  const [month, setMonth] = useState(formatDateYYMMDD(value).slice(3, 5));
  const [day, setDay] = useState(formatDateYYMMDD(value).slice(6, 8));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    const [newYear, newMonth, newDay] = newValue.split('-');

    if (!isNaN(Number(newYear)) && !isNaN(Number(newMonth)) && !isNaN(Number(newDay))) {
      if (validateEachTowDigitOrLess(newValue)) return;
      setYear(newYear);
      setMonth(newMonth);
      setDay(newDay);
      onChange(formatDateYYMMDD(`${newYear}-${newMonth}-${newDay}`));
    }
  };
  return (
    <S.Container id={id} {...rest}>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        <S.Input
          type="text"
          value={`${year}-${month}-${day}`}
          onChange={handleChange}
          maxLength={8}
          pattern="\d{2}-\d{2}-\d{2}"
          placeholder="YY-MM-DD"
        />
      </S.InputContainer>
    </S.Container>
  );
};

export default DateInput;
