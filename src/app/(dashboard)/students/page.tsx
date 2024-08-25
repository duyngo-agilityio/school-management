// Components
import { StudentContainer } from '@/components';

// Types
import { TSearchParams } from '@/types';

const Students = async ({ searchParams }: { searchParams: TSearchParams }) => {
  return <StudentContainer searchParams={searchParams} />;
};

export default Students;
