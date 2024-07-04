import { AuthOptions, getServerSession as nextAuthServerSession } from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/server/db/db";
import GitlabProvider from "next-auth/providers/gitlab";

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    GitlabProvider({
      clientId: '4869789d9df2766eefc335fba88b98366873f7a5486d5d729fd446a1279fbd7e',
      clientSecret: 'gloas-1b6fdb5c5fa71af8e791ddc8426aba3a4b226e9255297ad778b3d5232e8ec326'
    }),
  ],
}

export const getServerSession =  async () => {
  return await nextAuthServerSession(authOptions);
}