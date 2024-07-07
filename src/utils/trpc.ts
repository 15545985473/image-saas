import { TRPCError, initTRPC } from '@trpc/server'
import { getServerSession } from '@/server/auth';

export const createTRPCContext = async () => {
  const session = await getServerSession();
  if (!session?.user) {
    throw new TRPCError({
      code: 'FORBIDDEN',
    })
  }
  return { session }
}

const t = initTRPC.context<typeof createTRPCContext>().create();
 
 const { router, procedure, middleware } = t;

export const AppRouter = router({
  hello: procedure.query(() => {
    return {
      name: 'hello world trpc'
    }
  }),
  test: procedure.query(() => {
    return {
      name: 'hello world test'
    }
  }),
})

export type AppRouter = typeof AppRouter;


