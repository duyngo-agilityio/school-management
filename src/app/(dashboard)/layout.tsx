import { ReactNode } from 'react';

// Components
import { Box, Flex } from '@chakra-ui/react';
import { SideBar } from '@/components';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex direction="row">
      <SideBar />
      <Box h="100vh" w="full" ml="241px" p="20px">
        {children}
      </Box>
    </Flex>
  );
};

export default RootLayout;
