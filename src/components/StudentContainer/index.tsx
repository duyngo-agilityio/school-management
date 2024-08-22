import { ReactNode } from 'react';

// Components
import { Box, Flex } from '@chakra-ui/react';
import SearchStudents from '../SearchStudents';
import TableStudent from '../TableStudent';
import HeaderBarStudent from '../HeaderBar/Student';

// Services
import { getStudentList } from '@/services';

interface StudentContainerProps {
  children?: ReactNode;
}

const StudentContainer = async ({ children }: StudentContainerProps) => {
  const data = await getStudentList();

  return (
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
};

export default StudentContainer;
