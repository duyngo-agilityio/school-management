// Components
import { SearchTeachers, TableTeacher } from '@/components';
import HeaderBarTeacher from '@/components/HeaderBar/Teacher';
import { Box } from '@chakra-ui/react';

// Services
import { getTeacherList } from '@/services';

const Teachers = async () => {
  const data = await getTeacherList();

  return (
    <Box p="40px">
      <HeaderBarTeacher />
      <Box mt="42px">
        <SearchTeachers fullName="" />
      </Box>
      <Box mt="11px">
        <TableTeacher data={data} />
      </Box>
    </Box>
  );
};

export default Teachers;
