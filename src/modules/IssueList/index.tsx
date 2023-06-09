'use client';

import { useGetIssues } from '@/api/queries/issue.query';
import Issue from '@/modules/Issue';

import * as S from './IssueList.style';

// export interface IssueListProps {}

const IssueList = () => {
  const { data, isLoading, isError } = useGetIssues();

  if (isLoading || isError) return <S.Container>Loading..</S.Container>;

  // TODO: useForm hooks로 수정하기
  const onChange = (props: any) => {
    console.log('ㅁㄴㅇㄹ');
  };

  const issues = data?.data.issues;
  return (
    <S.Container>
      {issues.map(({ ...issue }) => (
        <Issue key={issue.id} {...issue} isChecked onChange={onChange} />
      ))}
    </S.Container>
  );
};

export default IssueList;
