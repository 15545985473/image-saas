'use client'
import { useState } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpcClient, trpcClientReact } from '@/utils/api';

export default function TrpcProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <trpcClientReact.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpcClientReact.Provider>
  );
}
