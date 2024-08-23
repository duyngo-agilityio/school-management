// Components
import { StudentContainer } from '@/components';

// Services
import { getStudentList } from '@/services';

// Types
import { TSearchParams } from '@/types';

const Students = async ({ searchParams }: { searchParams?: TSearchParams }) => {
  const { q = '' } = searchParams as TSearchParams;

  const data = await getStudentList({ q });

  return <StudentContainer data={data} />;
};

export default Students;
