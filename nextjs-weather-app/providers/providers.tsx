"use client";

import React, { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

interface ProviderProps {
  children: ReactNode;
}
const queryClient = new QueryClient();

const Provider: FC<ProviderProps> = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Provider;
