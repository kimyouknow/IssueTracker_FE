import { useState } from 'react';

import { formatDateYYMMDD } from '@/utils/date.util';
import { DateType } from '@/utils/date.util';

import * as S from './DateInput.style';
import { ThemeSize } from './DateInput.type';

export interface DateInputProps {
  label: string;
  id: string;
  value: DateType;
  themeSize: ThemeSize;
  onChange: (value: DateType) => void;
  isSuccess?: boolean;
}

const validateEachTowDigitOrLess = (str: string) => str.split('-').some(v => v.length > 2);

const DateInput = ({
  id,
  label,
  themeSize = 'l',
  isSuccess = false,
  value,
  onChange,
  ...rest
}: DateInputProps) => {
  const [year, setYear] = useState(formatDateYYMMDD(value).slice(0, 2));
  const [month, setMonth] = useState(formatDateYYMMDD(value).slice(3, 5));
  const [day, setDay] = useState(formatDateYYMMDD(value).slice(6, 8));
  const [wasTouch, setWasTouch] = useState(false);
  const [error, setError] = useState('');
  const isError = wasTouch && !!error;
  const isThemeSizeSmall = themeSize === 's';

  const handleBlur = () => {
    setWasTouch(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setWasTouch(true);
    const [newYear, newMonth, newDay] = newValue.split('-');

    if (isNaN(Number(newYear)) || isNaN(Number(newMonth)) || isNaN(Number(newDay))) {
      setError('YY-MM-DD형식으로 입력해주세요.');
      return;
    }
    if (validateEachTowDigitOrLess(newValue)) {
      setError('YY-MM-DD형식으로 입력해주세요.');
      return;
    }
    setYear(newYear);
    setMonth(newMonth);
    setDay(newDay);
    onChange(formatDateYYMMDD(`${newYear}-${newMonth}-${newDay}`));
    setError('');
  };
  return (
    <>
      <S.Container themeSize={themeSize} isError={isError} isSuccess={isSuccess} {...rest}>
        <S.Label>{label}</S.Label>
        <S.Input
          id={id}
          type="text"
          value={`${year}-${month}-${day}`}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={8}
          pattern="\d{2}-\d{2}-\d{2}"
          placeholder="YY-MM-DD"
        />
      </S.Container>
      {!isThemeSizeSmall && isError && <S.Error>{error}</S.Error>}
      {!isThemeSizeSmall && isSuccess && <S.Success>{error}</S.Success>}
    </>
  );
};

export default DateInput;
