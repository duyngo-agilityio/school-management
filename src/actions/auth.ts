'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

// Constants
import { ROUTES, VALIDATE_MESSAGE } from '@/constants';

// Types
import { SignInFormData } from '@/types';

// Services
import { apiClient } from '@/services';

interface SignUpFormData {
  email: string;
  password: string;
}

export const signin = async (formData: SignInFormData) => {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return VALIDATE_MESSAGE.USERNAME_PASSWORD;

        default:
          return 'Something went wrong!';
      }
    }

    throw error;
  }
};

export const signup = async (data: SignUpFormData) => {
  try {
    const response = await apiClient.post(ROUTES.USERS, { body: data });

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
