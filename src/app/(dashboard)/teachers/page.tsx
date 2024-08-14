// Components
import { HeaderBar, SearchTeachers, TableTeacher } from '@/components';
import { Box, Button } from '@chakra-ui/react';

const Teachers = () => {
  return (
    <Box p="40px">
      <HeaderBar width="full">
        <Button variant="primary">Add Teacher</Button>
      </HeaderBar>
      <Box mt="42px">
        <SearchTeachers />
      </Box>
      <Box mt="11px">
        <TableTeacher />
      </Box>
    </Box>
  );
};

export default Teachers;
