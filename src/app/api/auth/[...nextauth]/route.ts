import NextAuth from "next-auth"
import { authOptions } from '@/server/auth';

export const handlers = NextAuth(authOptions)

export { handlers as GET, handlers as POST }
