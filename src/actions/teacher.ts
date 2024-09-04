'use server';

import { revalidateTag } from 'next/cache';

// Constants
import { ROUTES, TAGS } from '@/constants';

// Types
import { ITeacher } from '@/types';

// Services
import { apiClient } from '@/services';

export const addTeacher = async (data: Omit<ITeacher, 'id'>) => {
  try {
    const response = await apiClient.post<Omit<ITeacher, 'id'>>(
      `${ROUTES.TEACHER}`,
      { body: data },
    );

    revalidateTag(TAGS.TEACHERS);

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const editTeacher = async (data: ITeacher, id: string) => {
  try {
    const response = await apiClient.put<ITeacher>(`${ROUTES.TEACHER}/${id}`, {
      body: data,
    });

    revalidateTag(TAGS.TEACHERS);

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const deleteTeacher = async (id: string) => {
  try {
    const response = await apiClient.delete<ITeacher>(
      `${ROUTES.TEACHER}/${id}`,
    );

    revalidateTag(TAGS.TEACHERS);

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
