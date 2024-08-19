import { ReactNode } from 'react';

// Components
import { Box, Button, Flex } from '@chakra-ui/react';
import HeaderBar from '../HeaderBar';
import SearchStudents from '../SearchStudents';
import TableStudent from '../TableStudent';

// Services
import { getStudentList } from '@/services';

interface StudentContainerProps {
  children?: ReactNode;
}

const StudentContainer = async ({ children }: StudentContainerProps) => {
  const data = await getStudentList();

  return (
    <Box p="40px">
      <HeaderBar width="full">
        <Button variant="primary">Add Student</Button>
      </HeaderBar>
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
