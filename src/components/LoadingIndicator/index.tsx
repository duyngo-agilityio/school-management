// Components
import { Box, Spinner } from '@chakra-ui/react';

const LoadingIndicator = () => (
  <Box
    h="100vh"
    display="flex"
    alignItems="center"
    textAlign="center"
    justifyContent="center"
  >
    <Spinner size="lg" />
  </Box>
);

export default LoadingIndicator;
