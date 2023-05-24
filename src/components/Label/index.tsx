import * as S from './Label.style';
import { LabeCSSlType, LabelSizeType } from './Label.type';

export interface LabelProps {
  text: string;
  type: LabeCSSlType;
  backgroundColor?: string;
  color?: string;
  size?: LabelSizeType;
}

const Label = ({
  text,
  type = 'custom',
  backgroundColor,
  color,
  size = 'l',
  ...rest
}: LabelProps) => {
  return (
    <S.Container type={type} backgroundColor={backgroundColor} color={color} size={size} {...rest}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default Label;
