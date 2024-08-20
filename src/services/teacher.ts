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
