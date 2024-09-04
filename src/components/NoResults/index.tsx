import Image from 'next/image';
import Link from 'next/link';

// Components
import { Flex, Text } from '@chakra-ui/react';

// Constants
import { PAGE_NOT_FOUND_IMAGE } from '@/constants';

interface NoResultsProps {
  title: string;
  src?: string;
  description?: string;
  backButton?: string;
  href?: string;
  width?: number;
  height?: number;
}

const NoResults = ({
  src = PAGE_NOT_FOUND_IMAGE,
  title,
  description,
  backButton,
  href = '',
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
      <Link href={href}>{backButton}</Link>
    </Flex>
  );
};

export default NoResults;
