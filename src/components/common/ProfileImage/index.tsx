import Image from 'next/image';

import * as S from './ProfileImage.style';

const SIZE = {
  xl: 32,
  l: 24,
  m: 18,
  s: 14,
  xs: 10,
};

export interface ProfileImageProps {
  size: keyof typeof SIZE;
  src: string;
  alt: string;
}

const ProfileImage = ({ size = 'm', src, alt }: ProfileImageProps) => {
  return (
    <S.Container width={SIZE[size]} height={SIZE[size]}>
      <Image src={src} width={SIZE[size]} height={SIZE[size]} alt={alt} loading="lazy" />
    </S.Container>
  );
};

export default ProfileImage;
