'use client';

import { memo, MouseEvent, ReactNode } from 'react';

// Components
import { Tr, TableRowProps as ChakraTableRowProps } from '@chakra-ui/react';
import isEqual from 'react-fast-compare';

interface TableRowProps extends ChakraTableRowProps {
  children: ReactNode;
  onClickRow?: (event: MouseEvent<HTMLTableRowElement>) => void;
}

const TableRow = ({ children, onClickRow, ...rest }: TableRowProps) => {
  return (
    <Tr onClick={onClickRow} {...rest}>
      {children}
    </Tr>
  );
};

export default memo(TableRow, isEqual);
