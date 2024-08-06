import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

// Components
import Sidebar from '@/components/SideBar';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex direction="row">
      <Sidebar />
      <Box h="100vh" w="full" ml="241px" p="20px">
        {children}
      </Box>
    </Flex>
  );
};

export default RootLayout;
