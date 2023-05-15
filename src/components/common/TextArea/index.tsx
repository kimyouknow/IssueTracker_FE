import { TextareaHTMLAttributes, useRef, useState } from 'react';

import Icon from '@/components/common/Icon';

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

  // FIXME: 기본 높이 고정에 기본 높이를 넘어갈 때만 높이가 증가되게 수정하기
  // useAutoSizeTextArea(textAreaRef.current, value);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const _value = event.target.value;
    setValue(_value);
  };

  return (
    <S.Container>
      {value && <S.Label>{label}</S.Label>}
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
      <S.Line />
      <S.FileAttach>
        <Icon type="paperClip" />
        <span>파일 첨부하기</span>
      </S.FileAttach>
    </S.Container>
  );
};

export default TextArea;
