import Image from 'next/image';

import CheckInput from '@/components/CheckInput';
import Icon from '@/components/Icon';
import Label from '@/components/Label';
import { IssueType } from '@/types/domain.type';
import { getElapsedTime } from '@/utils/date.util';

import * as S from './Issue.style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IssueProps extends IssueType {
  isChecked: boolean;
  onChange: (prop: any) => void;
}

const Issue = ({
  id,
  status,
  subject,
  writer,
  profileUrl,
  createDateTime,
  milestone,
  labels,
  isChecked,
  onChange,
}: IssueProps) => {
  const isOpen = status === 'OPEN';

  return (
    <S.Container>
      <S.InfoWrapper>
        <CheckInput checked={isChecked} onChange={onChange} />
        <S.Info>
          <S.Title>
            {isOpen ? <Icon type="alertCircle" /> : <Icon type="archive" />}
            <h3>{subject}</h3>
            <S.Labels>
              {labels.map(({ id, title, color, bgColor }) => (
                <Label
                  key={id}
                  text={title}
                  type="custom"
                  color={color}
                  backgroundColor={bgColor}
                  size="m"
                />
              ))}
            </S.Labels>
          </S.Title>
          <S.InfoDetail>
            <div>#{id}</div>
            <div>
              이 이슈가 {getElapsedTime(createDateTime)}, {writer}에 의해 작성되었습니다.
            </div>
            <div>
              <Icon type="mileStone" />
              {milestone.subject}
            </div>
          </S.InfoDetail>
        </S.Info>
      </S.InfoWrapper>
      <Image src={profileUrl} alt={writer} width={20} height={20} />
    </S.Container>
  );
};

export default Issue;
