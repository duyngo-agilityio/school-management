import { ReactNode } from 'react';

// Components
import { Box, Flex } from '@chakra-ui/react';
import TableStudent from '../TableStudent';
import HeaderBarStudent from '../HeaderBar/Student';
import SearchInputWrapper from '../SearchInput/Wrapper';
import NotFound from '../NotFound';

// Types
import { IStudent } from '@/types';

// Constants
import { INPUT_PLACEHOLDER, NOTFOUND } from '@/constants';

interface StudentContainerProps {
  children?: ReactNode;
  data: IStudent[];
}

const StudentContainer = async ({ children, data }: StudentContainerProps) => {
  const { TITLE, DESCRIPTION } = NOTFOUND.STUDENT;

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
              <NotFound
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
