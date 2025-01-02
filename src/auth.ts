import NextAuth,{ type DefaultSession } from "next-auth"
import Google from "next-auth/providers/google"
declare module "next-auth" {
  interface Session {
    user: {} & DefaultSession["user"]
  }
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  secret: process.env.AUTH_SECRET, // Secret untuk JWT
  session: {
    strategy: "jwt",  // Menggunakan JWT sebagai strategi session
  },
}
)