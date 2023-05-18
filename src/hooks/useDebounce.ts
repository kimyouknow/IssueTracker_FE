import { useEffect, useRef } from 'react';

export const useDebounce = <T extends (...args: any[]) => void>(delay: number, callback: T) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => callback.apply(this, args), delay);
  };
};
