'use client';

// Components
import { Box } from '@chakra-ui/react';
import Profile from '../Profile';
import Navbar from '../Navbar';
import Link from 'next/link';
import { ROUTES } from '@/constants';

const Sidebar = () => {
  return (
    <Box
      bg="backgroundPrimary"
      borderRight="1px"
      w="241px"
      pos="fixed"
      h="full"
    >
      <Box borderBottom="1px" borderBottomColor="borderSecondary">
        <Link href={`${ROUTES.DASHBOARD}`}>
          <Profile src="/logo.png" title="Udemy Inter. school" variant="sm" />
        </Link>
      </Box>
      <Navbar />
    </Box>
  );
};

export default Sidebar;
