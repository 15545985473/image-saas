import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextRequest } from 'next/server';
import { AppRouter, createTRPCContext } from '@/utils/trpc';

const handler = (request: NextRequest) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: AppRouter,
    createContext: createTRPCContext
  })
}

export { handler as GET, handler as POST}

