// Libs
import { ReactNode } from 'react';
import { Metadata } from 'next';

// Providers
import { ChakraProvider } from '@/provider';

export const metadata: Metadata = {
  title: 'School Management Dashboard',
  description:
    'A streamlined dashboard for displaying and managing teacher and student information, featuring CRUD operations and a powerful search functionality.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
