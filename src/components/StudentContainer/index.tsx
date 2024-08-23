import { ReactNode } from 'react';

// Components
import { Box, Flex } from '@chakra-ui/react';
import SearchStudents from '../SearchStudents';
import TableStudent from '../TableStudent';
import HeaderBarStudent from '../HeaderBar/Student';

// Types
import { IStudent } from '@/types';

interface StudentContainerProps {
  children?: ReactNode;
  data: IStudent[];
}

const StudentContainer = async ({ children, data }: StudentContainerProps) => (
  <Box p="40px">
    <HeaderBarStudent />
    <Flex>
      <Flex flexDirection="column" flex={1}>
        <Box mt="42px">
          <SearchStudents />
        </Box>
        <Box mt="11px">
          <TableStudent data={data} />
        </Box>
      </Flex>
      {children}
    </Flex>
  </Box>
);

export default StudentContainer;
