'use server';

import { signIn, signOut } from '@/auth';
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
    const response = await signIn('credentials', {
      redirect: false, // This prevents automatic redirects so we can handle the response
      ...formData,
    });

    if (response?.error) {
      switch (response.status) {
        case 401:
          return VALIDATE_MESSAGE.UNAUTHORIZED;
        case 403:
          return VALIDATE_MESSAGE.FORBIDDEN;
        case 404:
          return VALIDATE_MESSAGE.NOT_FOUND;
        case 500:
          return VALIDATE_MESSAGE.INTERNAL_SERVER_ERROR;
        case 503:
          return VALIDATE_MESSAGE.SERVICE_UNAVAILABLE;
        default:
          return VALIDATE_MESSAGE.SOMETHING_WENT_WRONG;
      }
    }

    return response;
  } catch (error) {
    if (error instanceof AuthError) {
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
    throw new Error((error as Error).message);
  }
};

export const logout = async () => {
  await signOut();
};
