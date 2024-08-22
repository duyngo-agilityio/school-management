'use server';

import { revalidateTag } from 'next/cache';

// Constants
import { BASE_URL, ROUTES, TAGS } from '@/constants';

// Types
import { ITeacher } from '@/types';

// Services
import { apiRequest } from '@/services';

export const addTeacher = async (data: Omit<ITeacher, 'id'>) => {
  try {
    const response = await apiRequest<Omit<ITeacher, 'id'>>({
      endpoint: `${BASE_URL}${ROUTES.TEACHER}`,
      method: 'POST',
      payload: data,
    });

    revalidateTag(TAGS.TEACHERS);

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const editTeacher = async (data: ITeacher, id: string) => {
  try {
    const response = await apiRequest<ITeacher>({
      endpoint: `${BASE_URL}${ROUTES.TEACHER}/${id}`,
      method: 'PUT',
      payload: data,
    });

    revalidateTag(TAGS.TEACHERS);

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const deleteTeacher = async (id: string) => {
  try {
    const response = await apiRequest<ITeacher>({
      endpoint: `${BASE_URL}${ROUTES.TEACHER}/${id}`,
      method: 'DELETE',
    });

    revalidateTag(TAGS.TEACHERS);

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
