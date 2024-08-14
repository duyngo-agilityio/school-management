// Components
import { SearchStudents, TableStudent } from '@/components';
import { Box } from '@chakra-ui/react';

const Students = () => {
  return (
    <Box p="40px">
      <SearchStudents />
      <TableStudent />
    </Box>
  );
};

export default Students;
