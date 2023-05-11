import { TextareaHTMLAttributes, useRef, useState } from 'react';

import * as S from './TextArea.style';
import useAutoSizeTextArea from './useAutoSizeTextArea';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

// TODO: 마크다운 지원 되게 수정
const TextArea = ({ label, id, placeholder = '입력 사항', ...rest }: TextAreaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('');

  useAutoSizeTextArea(textAreaRef.current, value);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const _value = event.target.value;
    setValue(_value);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.TextArea
        ref={textAreaRef}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        autoComplete="off"
        rows={1}
        {...rest}
      />
    </S.Container>
  );
};

export default TextArea;
