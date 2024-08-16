import { TAGS, TEACHER_URL } from '@/constants';

export const getTeacherList = async () => {
  const response = await fetch(`${TEACHER_URL}`, {
    next: { tags: [TAGS.TEACHERS] },
  });

  return response.json();
};
