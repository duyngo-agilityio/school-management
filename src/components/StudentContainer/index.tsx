import { ReactNode } from 'react';

// Components
import { Box, Flex } from '@chakra-ui/react';
import TableStudent from '../TableStudent';
import HeaderBarStudent from '../HeaderBar/Student';
import SearchInputWrapper from '../SearchInput/Wrapper';
import NoResults from '../NoResults';

// Constants
import { INPUT_PLACEHOLDER, NOTFOUND } from '@/constants';

// Types
import { TSearchParams } from '@/types';
import { getStudentList } from '@/services';

interface StudentContainerProps {
  children?: ReactNode;
  searchParams: TSearchParams;
}

const StudentContainer = async ({
  children,
  searchParams,
}: StudentContainerProps) => {
  const { TITLE, DESCRIPTION } = NOTFOUND.STUDENT;
  const { q = '' } = searchParams as TSearchParams;

  const data = await getStudentList({ q });

  return (
    <Box p="40px">
      <HeaderBarStudent />
      <Flex>
        <Flex flexDirection="column" flex={1}>
          <Box mt="42px">
            <SearchInputWrapper placeholder={INPUT_PLACEHOLDER.TEACHER} />
          </Box>
          <Box mt="11px">
            {data?.length ? (
              <TableStudent data={data} />
            ) : (
              <NoResults
                title={TITLE}
                description={DESCRIPTION}
                src="/no_notification.png"
              />
            )}
          </Box>
        </Flex>
        {children}
      </Flex>
    </Box>
  );
};

export default StudentContainer;
