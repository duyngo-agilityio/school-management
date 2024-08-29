// Libs
import { Metadata } from 'next';

// Components
import { TableStudentWrapper } from '@/components';

// Types
import { TSearchParams } from '@/types';

export const metadata: Metadata = {
  title: 'Students',
  description:
    'Discover our Students page, showcasing student profiles, academic progress, and achievements in their educational journey.',
};

const Students = ({ searchParams }: { searchParams: TSearchParams }) => {
  return <TableStudentWrapper searchParams={searchParams} />;
};

export default Students;
