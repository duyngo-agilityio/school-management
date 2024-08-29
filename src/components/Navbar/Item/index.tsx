// Libs
import { memo, ReactNode } from 'react';
import Link from 'next/link';

// Components
import { Box, Flex } from '@chakra-ui/react';

// Icons
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface NavItemProps {
  icon: JSX.Element;
  href: string;
  isActive: boolean;
  children: ReactNode;
}

const NavItem = ({ icon, children, href, isActive, ...rest }: NavItemProps) => (
  <Link href={href} style={{ textDecoration: 'none' }}>
    <Flex
      align="center"
      p="4"
      mx="4"
      my="2"
      h="10"
      borderRadius="md"
      justifyContent="space-between"
      alignItems="center"
      role="group"
      cursor="pointer"
      color={isActive ? 'backgroundBlueHaveLock' : 'backgroundSecondary'}
      _hover={{
        bg: 'backgroundBlueHaveLock',
        color: 'white',
      }}
      {...(isActive && {
        color: 'textSecondary',
        bg: 'backgroundBlueHaveLock',
      })}
      {...rest}
    >
      <Flex alignItems="center">
        {icon && (
          <Box
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
          >
            {icon}
          </Box>
        )}
        {children}
      </Flex>
      {isActive && <MdOutlineKeyboardArrowRight />}
    </Flex>
  </Link>
);

export default memo(NavItem);
