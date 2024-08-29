'use client';

// Libs
import { useEffect } from 'react';

// Components
import { Button, Flex, Heading } from '@chakra-ui/react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorBoundary = ({ error, reset }: ErrorProps) => {
  const handleReset = () => {
    reset();
  };

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Flex flexDir="column" alignItems="center" gap="50px" mt={300}>
      <Heading>Something went wrong!</Heading>
      <Button onClick={handleReset}>Try again</Button>
    </Flex>
  );
};

export default ErrorBoundary;
