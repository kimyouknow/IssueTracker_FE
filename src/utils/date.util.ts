import dayjs from 'dayjs';
import { ConfigType } from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export type DateType = ConfigType;

export const formatDateYYMMDD = (date: DateType) => {
  const parsedDate = date === '' ? undefined : date;
  return dayjs(parsedDate).format('YY-MM-DD');
};

const formatNewDate = (parsedDate: string) => {
  const parts = parsedDate.split('-');
  const year = parseInt(parts[0]) + 2000;
  const month = parseInt(parts[1]) - 1;
  const day = parseInt(parts[2]);

  return new Date(year, month, day);
};

export const isTwoDigit = (v: string) => /^\d{0,2}$/.test(v);

export const getElapsedTime = (parsedDate: string) => {
  // 입력값을 Date 객체로 변환

  // 현재 시간과 입력값 사이의 경과 시간 계산
  const currentTime = new Date().getTime();
  const targetTime = formatNewDate(parsedDate).getTime();

  const elapsedTime = currentTime - targetTime;

  // 경과 시간을 초, 분, 시간, 일 단위로 변환
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  // 반환할 문자열 초기화
  let result = '';

  // 경과 시간에 따라 적절한 포맷의 문자열 생성
  if (years > 0) {
    result = `${years}년 전`;
  } else if (days > 0) {
    result = `${days}일 전`;
  } else if (hours > 0) {
    result = `${hours}시간 전`;
  } else if (minutes > 0) {
    result = `${minutes}분 전`;
  } else {
    result = `${seconds}초 전`;
  }

  return result;
};
