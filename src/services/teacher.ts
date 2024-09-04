// Constants
import { ROUTES, TAGS } from '@/constants';

// Types
import { ITeacher } from '@/types';

// Services
import { apiClient } from './api';

export const getTeacherList = async ({
  q,
}: {
  q: string;
}): Promise<ITeacher[]> => {
  const params = new URLSearchParams();
  params.set('q', `${q}&attr=fullName,email`);
  const query = decodeURIComponent(params.toString());

  const response = await apiClient.get<ITeacher[]>(
    `${ROUTES.TEACHER}?${query}`,
    {
      next: { tags: [TAGS.TEACHERS] },
      cache: 'no-store',
    },
  );

  return response;
};

export const getTeacherById = async (id: string): Promise<ITeacher> => {
  const response = await apiClient.get<ITeacher>(`${ROUTES.TEACHER}/${id}`, {
    next: { tags: [TAGS.TEACHER] },
    cache: 'no-store',
  });

  return response;
};
