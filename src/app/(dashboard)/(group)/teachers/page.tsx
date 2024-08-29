// Libs
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Components
import { NotFound, TableTeacher } from '@/components';
import { Box } from '@chakra-ui/react';
import SearchInputWrapper from '@/components/SearchInput/Wrapper';

// Services
import { getTeacherList } from '@/services';

// Types
import { TSearchParams } from '@/types';

// Constants
import { INPUT_PLACEHOLDER, NOTFOUND } from '@/constants';

export const metadata: Metadata = {
  title: 'Teachers',
  description:
    'Explore our dedicated Teachers page, featuring profiles, qualifications, and expertise of our faculty members to support student success.',
};


const Teachers = async ({ searchParams }: { searchParams?: TSearchParams }) => {
  const { q = '' } = searchParams as TSearchParams;
  const { TITLE, DESCRIPTION } = NOTFOUND.STUDENT;

  const data = await getTeacherList({ q });

  if (!data) notFound();

  return (
    <>
      <Box mt="42px">
        <SearchInputWrapper placeholder={INPUT_PLACEHOLDER.TEACHER} />
      </Box>
      <Box mt="11px">
        {data.length ? (
          <TableTeacher data={data} />
        ) : (
          <NotFound
            title={TITLE}
            description={DESCRIPTION}
            src="/no_notification.png"
          />
        )}
      </Box>
    </>
  );
};

export default Teachers;
