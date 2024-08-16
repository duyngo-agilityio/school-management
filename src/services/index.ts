import { TAGS, TEACHER_URL } from '@/constants';

export const getTeacherList = async () => {
  const response = await fetch(`${TEACHER_URL}`, {
    next: { tags: [TAGS.TEACHERS] },
  });

  return response.json();
};

export const getTeacherById = async (id: string) => {
  const response = await fetch(`${TEACHER_URL}/${id}`, {
    next: { tags: [TAGS.TEACHER] },
  });

  return response.json();
};
