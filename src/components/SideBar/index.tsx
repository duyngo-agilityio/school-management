'use client';

// Libs
import React from 'react';

// Components
import { Box } from '@chakra-ui/react';
import Profile from '../Profile';

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
        <Profile src="/logo.png" title="Udemy Inter. school" variant="md" />
      </Box>
      {/* TODO: Implement Nav component */}
    </Box>
  );
};

export default Sidebar;
