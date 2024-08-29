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
  onClick: (id: string) => void;
}

const TableCell = ({ item, column, onClick }: TableCellProps) => {
  const value = get(item, column.field);
  const renderCellValue = column.render ? column.render(item) : value;

  const handleOnClick = () => column.type !== 'action' && onClick(item.id);

  return (
    <Td
      borderBottom="none"
      fontSize="12px"
      cursor="pointer"
      onClick={handleOnClick}
    >
      {renderCellValue}
    </Td>
  );
};

export default memo(TableCell, isEqual);
