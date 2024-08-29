import { Stack } from '@chakra-ui/react';

// Components
import { NotFound } from '@/components';

const NotFoundPage = () => (
  <Stack justifyContent="center" alignItems="center" h="100vh">
    <NotFound title="Could not find the Student List" />
  </Stack>
);

export default NotFoundPage;
