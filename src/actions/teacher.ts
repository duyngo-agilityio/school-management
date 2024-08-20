'use server';

import { revalidateTag } from 'next/cache';

// Constants
import { TAGS } from '@/constants';

// Types
import { ITeacher } from '@/types';

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

export const deleteTeacher = async (
  url: string,
  id: string,
): Promise<ITeacher | null> => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
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
