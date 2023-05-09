import * as S from './Button.style';

export interface ButtonProps {
  primary?: boolean;
  text: string;
  onClick?: () => void;
}

const Button = ({ primary = false, text, ...props }: ButtonProps) => {
  return (
    <S.Container primary={primary} type="button" {...props}>
      {text}
    </S.Container>
  );
};

export default Button;
