// Components
import { HeaderBar, SearchStudents, TableStudent } from '@/components';
import { Box, Button } from '@chakra-ui/react';

const Students = () => {
  return (
    <>
      <Box p="40px">
        <HeaderBar width="full">
          <Button variant="primary">Add Student</Button>
        </HeaderBar>
        <Box mt="42px">
          <SearchStudents />
        </Box>
        <Box mt="11px">
          <TableStudent />
        </Box>
      </Box>
    </>
  );
};

export default Students;
