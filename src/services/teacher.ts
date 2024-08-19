'use server';

import { revalidateTag } from 'next/cache';

// Constants
import { TAGS, TEACHER_URL } from '@/constants';

// Types
import { ITeacher } from '@/types';

export const getTeacherList = async (): Promise<ITeacher[]> => {
  const response = await fetch(`${TEACHER_URL}`, {
    next: { tags: [TAGS.TEACHERS] },
  });

  return response.json();
};

export const getTeacherById = async (id: string): Promise<ITeacher> => {
  const response = await fetch(`${TEACHER_URL}/${id}`, {
    next: { tags: [TAGS.TEACHER] },
  });

  return response.json();
};

export const addTeacher = async (
  url: string,
  dataField: ITeacher,
): Promise<ITeacher | null> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataField),
    });

    if (!response.ok) {
      return null;
    }

    revalidateTag(TAGS.TEACHERS);

    return response.json();
  } catch (error) {
    return null;
  }
};
