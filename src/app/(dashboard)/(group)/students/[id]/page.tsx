// Libs
import { Suspense } from 'react';

// Components
import {
  InfoStudent,
  LoadingIndicator,
  TableStudentWrapper,
} from '@/components';
import { Box, Flex } from '@chakra-ui/react';

// Types
import { TSearchParams } from '@/types';

const StudentDetails = async ({
  searchParams,
  params,
}: {
  searchParams: TSearchParams;
  params: { id: string };
}) => {
  return (
    <Flex>
      <Flex flexDirection="column" flex={1}>
        <Box w="full" mt="11px">
          <Suspense fallback={<LoadingIndicator />}>
            <TableStudentWrapper searchParams={searchParams} />
          </Suspense>
        </Box>
      </Flex>
      <Box w="313px">
        <Suspense fallback={<LoadingIndicator />}>
          <InfoStudent params={params} />
        </Suspense>
      </Box>
    </Flex>
  );
};

export default StudentDetails;
