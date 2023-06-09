import { CommentType } from '@/types/domain.type';

import * as S from './Comment.style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CommentProps extends CommentType {
  isMainContent?: boolean;
}

const Comment = ({
  writer,
  commentId,
  content,
  createDateTime,
  status,
  isEditable,
  isMainContent = false,
}: CommentProps) => {
  return (
    <S.Container>
      <h3>{writer.nickname}</h3>
      <p>{content}</p>
    </S.Container>
  );
};

export default Comment;
