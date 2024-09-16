// Libs
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Suspense } from 'react';

// Components
import { NotFound, TableTeacher } from '@/components';
import { Box } from '@chakra-ui/react';
import SearchInputWrapper from '@/components/SearchInput/Wrapper';
import TableSkeleton from '@/components/Skeleton/TableSkeleton';

// Services
import { getTeacherList } from '@/services';

// Types
import { TSearchParams } from '@/types';

// Constants
import { INPUT_PLACEHOLDER, NOTFOUND, ROUTES } from '@/constants';

export const metadata: Metadata = {
  title: 'Teachers',
  description:
    'Explore our dedicated Teachers page, featuring profiles, qualifications, and expertise of our faculty members to support student success.',
};

const Teachers = async ({ searchParams }: { searchParams?: TSearchParams }) => {
  const { q = '' } = searchParams as TSearchParams;
  const { TITLE, DESCRIPTION, BACK_BUTTON } = NOTFOUND.TEACHER;
  const data = await getTeacherList({ q });

  if (!data) notFound();

  return (
    <>
      <Box mt="42px">
        <SearchInputWrapper placeholder={INPUT_PLACEHOLDER.TEACHER} />
      </Box>
      <Box mt="11px">
        {data.length ? (
          <Suspense fallback={<TableSkeleton />}>
            <TableTeacher data={data} />
          </Suspense>
        ) : (
          <NotFound
            title={TITLE}
            description={DESCRIPTION}
            backButton={BACK_BUTTON}
            src="/no_notification.png"
            href={ROUTES.TEACHER}
          />
        )}
      </Box>
    </>
  );
};

export default Teachers;
