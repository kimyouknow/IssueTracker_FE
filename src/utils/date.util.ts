import dayjs from 'dayjs';
import { ConfigType } from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export type DateType = ConfigType;

export const formatDateYYMMDD = (date: DateType) => {
  const parsedDate = date === '' ? undefined : date;
  return dayjs(parsedDate).format('YY-MM-DD');
};

export const isTwoDigit = (v: string) => /^\d{0,2}$/.test(v);
