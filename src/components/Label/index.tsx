import * as S from './Label.style';
import { LabeCSSlType } from './Label.type';

export interface LabelProps {
  text: string;
  type: LabeCSSlType;
  backgroundColor?: string;
  color?: string;
}

const Label = ({ text, type = 'custom', backgroundColor, color }: LabelProps) => {
  return (
    <S.Container type={type} backgroundColor={backgroundColor} color={color}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default Label;
