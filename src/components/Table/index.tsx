'use client';

import { useState } from 'react';

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
  onClickRow: (id: string) => void;
}

const Table = ({ columns, data, onClickRow }: TableProps) => {
  const [selectedId, setSelectedId] = useState<string>('');

  const handleClickRow = (id: string) => () => {
    setSelectedId(id);
    onClickRow(id);
  };

  return (
    <TableContainer>
      <ChakraTable>
        <TableHeader columns={columns} />
        <Tbody>
          {data.map((item, index) => {
            const activeRow = selectedId === item.id;
            const bgColor = activeRow
              ? 'backgroundBlueHaveLock'
              : index % 2 === 0
                ? 'backgroundSolitude'
                : '';

            const textColor = activeRow ? 'textSecondary' : 'textPrimary';

            return (
              <TableRow
                key={item.id}
                onClickRow={handleClickRow(item.id)}
                bg={bgColor}
                color={textColor}
                cursor="pointer"
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

export default Table;
