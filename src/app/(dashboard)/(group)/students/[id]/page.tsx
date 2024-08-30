// Libs
import { Suspense } from 'react';
import { Metadata } from 'next';

// Components
import { InfoStudent, TableStudentWrapper } from '@/components';
import { Box, Flex } from '@chakra-ui/react';
import TableSkeleton from '@/components/Skeleton/TableSkeleton';
import StudentDetailSkeleton from '@/components/Skeleton/StudentDetailSkeleton';

// Types
import { TSearchParams } from '@/types';

// Services
import { getStudentById } from '@/services';

interface StudentDetailPageProps {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params: { id },
}: StudentDetailPageProps): Promise<Metadata> => {
  const data = await getStudentById(id);

  if (!data) {
    return {};
  }

  const { fullName, avatar = '', className } = data;

  return {
    title: fullName,
    authors: { name: fullName },
    description: `Get to know ${fullName}, a student in class ${className}. Explore their academic journey, personal background, and unique contributions to the school community.`,
    keywords: fullName,
    openGraph: {
      title: fullName,
      description: `Get to know ${fullName}, a student in class ${className}. Explore their academic journey, personal background, and unique contributions to the school community.`,
      url: `https://data-school-management.onrender.com/students/${id}`,
      images: [
        {
          url: avatar,
          width: 700,
          height: 300,
          alt: fullName,
        },
      ],
    },
  };
};

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
          <Suspense fallback={<TableSkeleton />}>
            <TableStudentWrapper searchParams={searchParams} />
          </Suspense>
        </Box>
      </Flex>
      <Box w="313px">
        <Suspense fallback={<StudentDetailSkeleton />}>
          <InfoStudent params={params} />
        </Suspense>
      </Box>
    </Flex>
  );
};

export default StudentDetails;
