'use client';

import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useParams } from 'next/navigation';

// Components
import { TableContainer, Tbody, Table as ChakraTable } from '@chakra-ui/react';
import TableHeader from './Header';
import TableRow from './Row';
import TableCell from './Cell';

// Types
import { IFiledNameColumns, TDataType } from '@/types';

interface TableProps {
  columns: IFiledNameColumns[];
  data: TDataType[];
}

const Table = ({ columns, data }: TableProps) => {
  const param = useParams<{ id: string }>();

  return (
    <TableContainer>
      <ChakraTable>
        <TableHeader columns={columns} />
        <Tbody>
          {data.map((item, index) => {
            const activeRow = param?.id === item?.id;
            const bgColor = activeRow
              ? 'backgroundBlueHaveLock'
              : index % 2 === 0
                ? 'backgroundSolitude'
                : '';

            const textColor = activeRow ? 'textSecondary' : 'textPrimary';

            return (
              <TableRow
                key={item.id}
                bg={bgColor}
                color={textColor}
                borderBottom="none"
              >
                {columns.map((column) => (
                  <TableCell key={column.field} column={column} item={item} />
                ))}
              </TableRow>
            );
          })}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default memo(Table, isEqual);
