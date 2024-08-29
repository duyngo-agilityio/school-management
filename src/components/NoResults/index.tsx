import Image from 'next/image';
import Link from 'next/link';

// Components
import { Flex, Text } from '@chakra-ui/react';

// Constants
import { PAGE_NOT_FOUND_IMAGE, ROUTES } from '@/constants';

interface NoResultsProps {
  title: string;
  src?: string;
  description?: string;
  width?: number;
  height?: number;
}

const NoResults = ({
  src = PAGE_NOT_FOUND_IMAGE,
  title,
  description,
  width = 340,
  height = 225,
}: NoResultsProps) => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Image src={src} alt="" width={width} height={height} />
      <Text variant="primary" fontWeight="semibold" size="xl" mt="31px">
        {title}
      </Text>
      <Text variant="primary" size="sm" mt="4px">
        {description}
      </Text>
      <Link href={ROUTES.STUDENT}>Back to Student List</Link>
    </Flex>
  );
};

export default NoResults;
