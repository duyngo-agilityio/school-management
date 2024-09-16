'use server';

import { revalidateTag } from 'next/cache';

// Constants
import { ROUTES, TAGS } from '@/constants';

// Types
import { IStudent } from '@/types';

// Services
import { apiClient } from '@/services';

export const addStudent = async (data: Omit<IStudent, 'id'>) => {
  try {
    const response = await apiClient.post<Omit<IStudent, 'id'>>(
      `${ROUTES.STUDENT}`,
      { body: data },
    );

    revalidateTag(TAGS.STUDENTS);

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const editStudent = async (data: IStudent, id: string) => {
  try {
    const response = await apiClient.put<IStudent>(`${ROUTES.STUDENT}/${id}`, {
      body: data,
    });

    revalidateTag(TAGS.STUDENTS);
    revalidateTag(TAGS.STUDENT);

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const deleteStudent = async (id: string) => {
  try {
    const response = await apiClient.delete<IStudent>(
      `${ROUTES.STUDENT}/${id}`,
    );

    revalidateTag(TAGS.STUDENTS);

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
