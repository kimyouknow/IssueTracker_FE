export const milestoneQueryKey = {
  milestone: ['milestone'] as const,
};

export const labelQueryKey = {
  label: ['label'] as const,
};

export const memberQueryKey = {
  member: ['member'] as const,
};

export const issueQueryKey = {
  issues: ['issues'] as const,
};

export const commentQueryKey = {
  comments: ['comments'] as const,
  detail: (issueId: string) => [...commentQueryKey.comments, 'detail', issueId.toString()] as const,
};
