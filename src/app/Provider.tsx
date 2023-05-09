'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

import initMocks from '@/mocks';
import Styles from '@/styles';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  initMocks();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      retry: process.env.NODE_ENV === 'development' ? false : 3,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <Styles>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Styles>
    </RecoilRoot>
  );
};

export default Provider;
