// Constants
import { STUDENT_URL, TAGS } from '@/constants';

// Types
import { IStudent } from '@/types';

export const getStudentList = async (): Promise<IStudent[]> => {
  const response = await fetch(`${STUDENT_URL}`, {
    next: { tags: [TAGS.STUDENTS] },
  });

  return response.json();
};

export const getStudentById = async (id: string): Promise<IStudent> => {
  const response = await fetch(`${STUDENT_URL}/${id}`, {
    next: { tags: [TAGS.STUDENT] },
  });

  return response.json();
};
