'use client';

// Libs
import { ReactNode } from 'react';
import { ChakraProvider as Provider } from '@chakra-ui/react';

// Themes
import theme from '@/themes';

export const ChakraProvider = ({ children }: { children: ReactNode }) => {
  return <Provider theme={theme}>{children}</Provider>;
};
