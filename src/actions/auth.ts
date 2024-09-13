'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';

// Constants
import { ERROR_MESSAGES, ROUTES, VALIDATE_MESSAGE } from '@/constants';

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
    const response = await signIn('credentials', formData);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return VALIDATE_MESSAGE.USERNAME_PASSWORD;

        default:
          return VALIDATE_MESSAGE.SOMETHING_WENT_WRONG;
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
    if (error instanceof Error) {
      return error.message;
    }

    return ERROR_MESSAGES.UNKNOWN_ERROR;
  }
};

export const logout = async () => {
  await signOut();
};
