// Constants
import { ROUTES, TAGS } from '@/constants';

// Types
import { IStudent } from '@/types';

// Services
import { apiClient } from './api';

export const getStudentList = async ({
  q,
}: {
  q: string;
}): Promise<IStudent[]> => {
  const params = new URLSearchParams();
  params.set('q', `${q}&attr=fullName,email`);
  const query = decodeURIComponent(params.toString());

  const response = await apiClient.get<IStudent[]>(
    `${ROUTES.STUDENT}?${query}`,
    {
      next: { tags: [TAGS.STUDENTS] },
      cache: 'no-store',
    },
  );

  return response;
};

export const getStudentById = async (id: string): Promise<IStudent> => {
  const response = await apiClient.get<IStudent>(`${ROUTES.STUDENT}/${id}`, {
    next: { tags: [TAGS.STUDENT] },
    cache: 'no-store',
  });

  return response;
};
