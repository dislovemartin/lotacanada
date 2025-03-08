import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GitHubProvider from 'next-auth/providers/github'
import prisma from '../../../lib/prisma'

/**
 * NextAuth.js configuration for authentication
 * Enhanced for production use with proper security settings
 */
const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, token, user }) {
      // Add user ID to the session for easier access
      if (session?.user) {
        session.user.id = token.sub || user.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      // Add user ID to the JWT token
      if (user) {
        token.uid = user.id;
      }
      return token;
    }
  },
  debug: process.env.NODE_ENV === 'development',
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
