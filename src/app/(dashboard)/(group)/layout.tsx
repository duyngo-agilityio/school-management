'use client';

// Libs
import { ReactNode } from 'react';

// Components
import HeaderBarWrapper from '@/components/HeaderBar/Wrapper';
import { Box } from '@chakra-ui/react';

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box p="40px">
      <HeaderBarWrapper />
      {children}
    </Box>
  );
};

export default LayoutContainer;
