// Constants
import { BASE_URL, ROUTES, TAGS } from '@/constants';

// Types
import { IStudent } from '@/types';

// Services
import { apiRequest } from './api';

export const getStudentList = async ({
  q,
}: {
  q: string;
}): Promise<IStudent[]> => {
  const params = new URLSearchParams();
  params.set('q', `${q}&attr=fullName,email`);
  const query = decodeURIComponent(params.toString());

  const response = await apiRequest<IStudent>({
    endpoint: `${BASE_URL}${ROUTES.STUDENT}?${query}`,
    method: 'GET',
    configOptions: {
      next: { tags: [TAGS.STUDENTS] },
      cache: 'no-store',
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
