// Components
import { SearchTeachers, TableTeacher } from '@/components';
import { Box } from '@chakra-ui/react';

const Teachers = () => {
  return (
    <Box p="40px">
      <SearchTeachers />
      <TableTeacher />
    </Box>
  );
};

export default Teachers;
