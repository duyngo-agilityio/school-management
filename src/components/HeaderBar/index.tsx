import { ReactNode } from 'react';

// Icons
import { BellNotification } from '@/icons';

// Components
import { Flex } from '@chakra-ui/react';

interface HeaderBarProps {
  children: ReactNode;
  width?: string;
}

const HeaderBar = ({ children, width }: HeaderBarProps) => {
  return (
    <Flex justifyContent="space-between" w={width}>
      {children}
      <BellNotification />
    </Flex>
  );
};

export default HeaderBar;
