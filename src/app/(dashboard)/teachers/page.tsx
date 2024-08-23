// Components
import { SearchTeachers, TableTeacher } from '@/components';
import HeaderBarTeacher from '@/components/HeaderBar/Teacher';
import { Box } from '@chakra-ui/react';

// Services
import { getTeacherList } from '@/services';

// Types
import { TSearchParams } from '@/types';

const Teachers = async ({ searchParams }: { searchParams?: TSearchParams }) => {
  const { q = '' } = searchParams as TSearchParams;

  const data = await getTeacherList({ q });

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
