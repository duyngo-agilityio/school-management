// Components
import { HeaderBar, SearchTeachers, TableTeacher } from '@/components';
import { getTeacherList } from '@/services';
import { Box, Button } from '@chakra-ui/react';

const Teachers = async () => {
  const data = await getTeacherList();

  return (
    <Box p="40px">
      <HeaderBar width="full">
        <Button variant="primary">Add Teacher</Button>
      </HeaderBar>
      <Box mt="42px">
        <SearchTeachers fullName=''/>
      </Box>
      <Box mt="11px">
        <TableTeacher data={data} />
      </Box>
    </Box>
  );
};

export default Teachers;
