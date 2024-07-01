'use client'
import { useSession, SessionProvider as NextAuthProvider } from 'next-auth/react';

export const UserInfo = () => {
  const session = useSession();
  return <div>{session?.data?.user?.name}</div>
}

export const SessionProvider = (props: any) => {
  return <NextAuthProvider {...props}></NextAuthProvider>
}