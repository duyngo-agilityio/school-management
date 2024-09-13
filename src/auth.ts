import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

// Services
import { apiClient } from './services';

// Constants
import { ROUTES } from './constants';

interface UserAuthentication {
  email: string;
  password: string;
}

export const CredentialsProvider = credentials({
  credentials: {
    email: { label: 'Email', type: 'email' },
    password: { label: 'Password', type: 'password' },
  },
  authorize: async (credentials) => {
    const parsedCredentials = z
      .object({
        email: z.string().email(),
        password: z.string(),
      })
      .safeParse(credentials);

    if (parsedCredentials.success) {
      const { email, password } = parsedCredentials.data;

      const users = await apiClient.get<UserAuthentication[]>(ROUTES.USERS);

      const user = users.find((user) => {
        const { email: userEmail } = user || {};

        return userEmail === email;
      });

      if (!user) return null;

      const isPasswordsMatch = await bcrypt.compare(
        String(password),
        user.password,
      );

      if (isPasswordsMatch) return user;
    }

    return null;
  },
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  providers: [CredentialsProvider],
});
