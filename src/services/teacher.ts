// Constants
import { BASE_URL, ROUTES, TAGS } from '@/constants';

// Types
import { ITeacher } from '@/types';

// Services
import { apiRequest } from './api';

export const getTeacherList = async (): Promise<ITeacher[]> => {
  const response = await apiRequest<ITeacher>({
    endpoint: `${BASE_URL}${ROUTES.TEACHER}`,
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
