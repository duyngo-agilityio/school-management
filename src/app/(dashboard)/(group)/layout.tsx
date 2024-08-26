import HeaderBarTeacher from '@/components/HeaderBar/Teacher';

import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box p="40px">
      <HeaderBarTeacher />
      {children}
    </Box>
  );
};

export default LayoutContainer;
