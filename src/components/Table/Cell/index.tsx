// Libs
import { memo } from 'react';
import isEqual from 'react-fast-compare';

// Components
import { Td } from '@chakra-ui/react';

// Types
import { IFiledNameColumns, TDataType } from '@/types';

// Lodash
import get from 'lodash.get';

interface TableCellProps {
  item: TDataType;
  column: IFiledNameColumns;
}

const TableCell = ({ item, column }: TableCellProps) => {
  const value = get(item, column.field);

  return <Td borderBottom="none">{value}</Td>;
};

export default memo(TableCell, isEqual);
