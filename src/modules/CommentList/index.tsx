import { useGetComments } from '@/api/queries/comment.query';
import Comment from '@/modules/Comment';

import * as S from './CommentList.style';

export interface CommentListProps {
  issueId: string;
}

const CommentList = ({ issueId }: CommentListProps) => {
  const { data, isLoading, isError } = useGetComments(issueId);

  if (isLoading || isError) return <S.Container>Loading..</S.Container>;

  const comments = data?.data.comments;

  return (
    <S.Container>
      {comments.map(({ ...comment }) => (
        <Comment key={comment.commentId} {...comment} />
      ))}
    </S.Container>
  );
};

export default CommentList;
