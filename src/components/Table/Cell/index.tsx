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
  const renderCellValue = column.render ? column.render(column, item) : value;

  return (
    <Td borderBottom="none" fontSize="12px">
      {renderCellValue}
    </Td>
  );
};

export default memo(TableCell, isEqual);
