import type { AdapterUser } from 'next-auth/adapters';
import { User } from './interfaces/user.interface';
import NextAuth, { type NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs';
import { z } from 'zod';

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/admin/login',
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          //* Validate if user exists with provided email
          const user = await prisma.user.findUnique({
            where: { email: email.toLowerCase() },
          });
          if (!user) return null;

          //* Validate if passwords matches
          const passwordsMatch = bcrypt.compareSync(password, user.password as string);
          if (!passwordsMatch) return null;

          const userWithoutPassword = Object.fromEntries(
            Object.entries(user).filter(([key]) => key !== 'password')
          );

          return userWithoutPassword;
        }

        return null;
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID ?? undefined,
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? undefined,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.data = user;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.data as AdapterUser & User;
      return session;
    },
    // authorized({ auth, request: { nextUrl } }) {
      // const isLoggedIn = !!auth?.user;
      // const isOnDashboard = nextUrl.pathname.startsWith('/admin/dashboard');
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true;
      //   return false; // Redirect unauthenticated users to login page
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL('/admin/dashboard', nextUrl));
      // }
      // return true;
    // },
  },
};

export const { auth, signIn, signOut, handlers } = NextAuth(authConfig);
