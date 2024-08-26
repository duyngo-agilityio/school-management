import Image from 'next/image';

// Components
import { Flex, Text } from '@chakra-ui/react';

interface NoResultsProps {
  title: string;
  src?: string;
  description?: string;
  width?: number;
  height?: number;
}

const NoResults = ({
  src = '',
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
    </Flex>
  );
};

export default NoResults;