import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../lib/mongodb";

import { signIn } from "@/lib/utils/auth";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        if (req.method === "POST") {
          try {
            const { user, error } = await signIn(credentials);

            if (error) return null;

            return user;
          } catch (error) {
            //return res.status(500).json({ error: error.message });
          }
        }

        //res.setHeader("Allow", ["POST"]);
        //res.status(405).end(`Method ${req.method} is not allowed.`);
      },
      credentials: undefined,
    }),
  ],
  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user !== undefined) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      //session.user = token; //to get ProfileInterface
      return session;
    },
  },
  session: {
    strategy: "jwt", // JSON Web Token
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
