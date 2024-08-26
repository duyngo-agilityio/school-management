// Components
import { TableStudentWrapper } from '@/components';

// Types
import { TSearchParams } from '@/types';

const Students = ({ searchParams }: { searchParams: TSearchParams }) => {
  
  return <TableStudentWrapper searchParams={searchParams} />;
};

export default Students;
