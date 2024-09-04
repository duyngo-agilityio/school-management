// Libs
import { notFound } from 'next/navigation';

// Constants
import { INPUT_PLACEHOLDER, NOTFOUND, ROUTES } from '@/constants';

// Components
import NoResults from '../NoResults';
import TableStudent from '../TableStudent';

// Types
import { TSearchParams } from '@/types';

// Services
import { getStudentList } from '@/services';
import { Box } from '@chakra-ui/react';
import SearchInputWrapper from '../SearchInput/Wrapper';

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
        <TableStudent data={data} />
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
