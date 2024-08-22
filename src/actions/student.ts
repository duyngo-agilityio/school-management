'use server';

import { revalidateTag } from 'next/cache';

// Constants
import { BASE_URL, ROUTES, TAGS } from '@/constants';

// Types
import { IStudent } from '@/types';

// Services
import { apiRequest } from '@/services';

export const addStudent = async (data: Omit<IStudent, 'id'>) => {
  try {
    const response = await apiRequest<Omit<IStudent, 'id'>>({
      endpoint: `${BASE_URL}${ROUTES.STUDENT}`,
      method: 'POST',
      payload: data,
    });

    revalidateTag(TAGS.STUDENTS);

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const editStudent = async (data: IStudent, id: string) => {
  try {
    const response = await apiRequest<IStudent>({
      endpoint: `${BASE_URL}${ROUTES.STUDENT}/${id}`,
      method: 'PUT',
      payload: data,
    });

    revalidateTag(TAGS.STUDENTS);

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const deleteStudent = async (id: string) => {
  try {
    const response = await apiRequest<IStudent>({
      endpoint: `${BASE_URL}${ROUTES.STUDENT}/${id}`,
      method: 'DELETE',
    });

    revalidateTag(TAGS.STUDENTS);

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
