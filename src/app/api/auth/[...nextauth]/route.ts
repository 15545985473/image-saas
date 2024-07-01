import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const handlers = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { type: 'text', label: 'username',  placeholder: 'Username' },
        password: { type: 'password', placeholder: 'Password' },
      },
      authorize: async (credentials) => {
        console.log(credentials, '=========')
        if (credentials) {
          return null;
        }
        const { username, password } = credentials;
 
        if (username !== 'shuailp' || password !== '123456') {
          return null;
        }
        return {
          id: "1",
          ...credentials
        }
      },
    }),
  ],
})

export { handlers as GET, handlers as POST }