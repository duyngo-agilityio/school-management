// Constants
import { BASE_URL, ROUTES, TAGS } from '@/constants';

// Types
import { IStudent } from '@/types';

// Services
import { apiRequest } from './api';

export const getStudentList = async (): Promise<IStudent[]> => {
  const response = await apiRequest<IStudent>({
    endpoint: `${BASE_URL}${ROUTES.STUDENT}`,
    method: 'GET',
    configOptions: {
      next: { tags: [TAGS.STUDENTS] },
    },
  });

  return response;
};

export const getStudentById = async (id: string): Promise<IStudent> => {
  const response = await apiRequest<IStudent>({
    endpoint: `${BASE_URL}${ROUTES.STUDENT}/${id}`,
    method: 'GET',
    configOptions: {
      next: { tags: [TAGS.STUDENT] },
    },
  });

  return response;
};
