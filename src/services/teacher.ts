// Constants
import { BASE_URL, ROUTES, TAGS } from '@/constants';

// Types
import { ITeacher } from '@/types';

// Services
import { apiRequest } from './api';

export const getTeacherList = async ({
  q,
}: {
  q: string;
}): Promise<ITeacher[]> => {
  const params = new URLSearchParams();
  params.set('q', `${q}&attr=fullName,email`);
  const query = decodeURIComponent(params.toString());

  const response = await apiRequest<ITeacher>({
    endpoint: `${BASE_URL}${ROUTES.TEACHER}?${query}`,
    method: 'GET',
    configOptions: {
      next: { tags: [TAGS.TEACHERS] },
    },
  });

  return response;
};

export const getTeacherById = async (id: string): Promise<ITeacher> => {
  const response = await apiRequest<ITeacher>({
    endpoint: `${BASE_URL}${ROUTES.TEACHER}/${id}`,
    method: 'GET',
    configOptions: {
      next: { tags: [TAGS.TEACHER] },
    },
  });

  return response;
};
