'use server';

import { revalidateTag } from 'next/cache';

// Constants
import { TAGS } from '@/constants';

// Types
import { ITeacher } from '@/types';

type APIResponse<T> = {
  isSuccess: boolean;
  data: T | null;
};

export const addTeacher = async (
  url: string,
  dataField: ITeacher,
): Promise<APIResponse<ITeacher>> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataField),
    });

    if (!response.ok) {
      return { isSuccess: false, data: null };
    }

    const data: ITeacher = await response.json();

    revalidateTag(TAGS.TEACHERS);

    return { isSuccess: true, data };
  } catch (error) {
    return { isSuccess: false, data: null };
  }
};

export const deleteTeacher = async (
  url: string,
  id: string,
): Promise<boolean> => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    });

    revalidateTag(TAGS.TEACHERS);

    return response.ok;
  } catch (error) {
    return false;
  }
};

export const editTeacher = async (
  url: string,
  id: string,
  newData: ITeacher,
): Promise<APIResponse<ITeacher>> => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(newData),
    });

    const data: ITeacher = await response.json();

    revalidateTag(TAGS.TEACHERS);

    return { isSuccess: true, data };
  } catch (error) {
    return { isSuccess: false, data: null };
  }
};
