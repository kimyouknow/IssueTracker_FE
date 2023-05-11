import dayjs from 'dayjs';
import { ConfigType } from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export type DateType = ConfigType;

export const formatDateYYYYMMDD = (date: DateType) => dayjs(date).format('YYYY-MM-DD');
