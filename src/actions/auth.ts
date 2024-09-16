'use server';

import { signIn, signOut } from '@/auth';

// Constants
import { ERROR_MESSAGES, ROUTES } from '@/constants';

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
    const result = await signIn('credentials', {
      redirect: false,
      ...formData,
    });

    if (result.error) {
      return {
        error: { message: result.error || ERROR_MESSAGES.UNKNOWN_ERROR },
      };
    }

    return result;
  } catch (error) {
    if (error instanceof Error) {
      return { error: { message: error.message } };
    }

    return {
      error: { message: ERROR_MESSAGES.UNKNOWN_ERROR },
    };
  }
};

export const signup = async (data: SignUpFormData) => {
  try {
    await apiClient.post(ROUTES.USERS, { body: data });
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
