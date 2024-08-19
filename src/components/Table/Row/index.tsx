'use client';

import { memo, ReactNode } from 'react';
import isEqual from 'react-fast-compare';

// Components
import { Tr, TableRowProps as ChakraTableRowProps } from '@chakra-ui/react';

interface TableRowProps extends ChakraTableRowProps {
  children: ReactNode;
}

const TableRow = ({ children, ...rest }: TableRowProps) => {
  return (
    <Tr {...rest}>
      {children}
    </Tr>
  );
};

export default memo(TableRow, isEqual);
