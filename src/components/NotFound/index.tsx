import Link from 'next/link';
import { Button, Center, Heading } from '@chakra-ui/react';

// constants
import { ERROR_MESSAGES, ROUTES } from '@/constants';

interface INotFound {
  error?: string;
}

const NotFound = ({ error }: INotFound) => (
  <Center flexDirection="column" gap={10} py={5} px={{ base: 10, md: 20 }}>
    <Center flexDirection="column" gap={0.5}>
      <Heading size={{ base: 'md', md: 'lg', lg: 'xl' }} variant="extra">
        404
      </Heading>
      <Heading
        size={{ base: 'xs', md: 'md' }}
        variant="extra"
        textTransform="capitalize"
      >
        {error ?? ERROR_MESSAGES.PAGE_NOT_FOUND}
      </Heading>
    </Center>
    <Link href={ROUTES.DASHBOARD}>
      <Button size={{ base: 'md', md: 'lg', lg: 'xl' }}>Back home</Button>
    </Link>
  </Center>
);

export default NotFound;
