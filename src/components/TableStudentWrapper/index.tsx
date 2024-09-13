// Libs
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

// Constants
import { INPUT_PLACEHOLDER, NOTFOUND, ROUTES } from '@/constants';

// Components
import NoResults from '../NoResults';
import TableStudent from '../TableStudent';
import TableSkeleton from '../Skeleton/TableSkeleton';
import { Box } from '@chakra-ui/react';
import SearchInputWrapper from '../SearchInput/Wrapper';

// Types
import { TSearchParams } from '@/types';

// Services
import { getStudentList } from '@/services';

interface TableStudentWrapperProps {
  searchParams: TSearchParams;
}

const TableStudentWrapper = async ({
  searchParams,
}: TableStudentWrapperProps) => {
  const { TITLE, DESCRIPTION, BACK_BUTTON } = NOTFOUND.STUDENT;
  const { q = '' } = searchParams as TSearchParams;

  const data = await getStudentList({ q });

  if (!data) notFound();

  return (
    <>
      <Box mt="42px">
        <SearchInputWrapper placeholder={INPUT_PLACEHOLDER.STUDENT} />
      </Box>
      {data?.length ? (
        <Suspense fallback={<TableSkeleton />}>
          <TableStudent data={data} />
        </Suspense>
      ) : (
        <NoResults
          title={TITLE}
          description={DESCRIPTION}
          backButton={BACK_BUTTON}
          src="/no_notification.png"
          href={ROUTES.STUDENT}
        />
      )}
    </>
  );
};

export default TableStudentWrapper;
