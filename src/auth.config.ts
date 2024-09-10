import type { NextAuthConfig } from 'next-auth';

// Constants
import { ROUTES } from './constants';

export const authConfig = {
  pages: {
    signIn: '/signin',
  },
  trustHost: true,
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isSignedIn = !!auth?.user;

      const isOnSigninPage = nextUrl.pathname === ROUTES.SIGN_IN;
      const isOnSignupPage = nextUrl.pathname === ROUTES.SIGN_UP;

      if (!isSignedIn && !isOnSigninPage && !isOnSignupPage) {
        return Response.redirect(new URL(ROUTES.SIGN_IN, nextUrl));
      }

      if (isSignedIn && (isOnSigninPage || isOnSignupPage)) {
        return Response.redirect(new URL(ROUTES.DASHBOARD, nextUrl));
      }

      return true;
    },
    async jwt({ user, token }) {
      if (token) Object.assign(token, user);
      return token;
    },
    async session({ session, token }) {
      Object.assign(session.user, token);
      return session;
    },
  },
  session: {
    maxAge: 60 * 60 * 24,
  },
  providers: [],
} satisfies NextAuthConfig;
