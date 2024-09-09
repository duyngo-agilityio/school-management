import type { Metadata } from 'next';

// Components
import { Stack } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack
      h="100vh"
      textAlign="center"
      bg="backgroundWhiteHint"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Stack>
  );
}
