// Components
import { Th, Thead, Tr } from '@chakra-ui/react';

// Types
import { IFiledNameColumns } from '@/types';

interface TableHeaderProps {
  columns: IFiledNameColumns[];
}

const TableHeader = ({ columns }: TableHeaderProps) => {
  const renderColumns = columns.map(({ field, headerName }) => (
    <Th key={field} borderBottom="none">{headerName}</Th>
  ));

  return (
    <Thead>
      <Tr>{renderColumns}</Tr>
    </Thead>
  );
};

export default TableHeader;
