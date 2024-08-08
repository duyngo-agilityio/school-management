// Components
import {
  TableContainer,
  Tbody,
  Td,
  Tr,
  Table as ChakraTable,
} from '@chakra-ui/react';
import TableHeader from './Header';

// Types
import { IFiledNameColumns, TDataType } from '@/types';

interface TableProps {
  columns: IFiledNameColumns[];
  data: TDataType[];
}

const Table = ({ columns }: TableProps) => {
  return (
    <TableContainer>
      <ChakraTable variant="striped" colorScheme="teal">
        <TableHeader columns={columns} />
        {/* Mock data */}
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>millimetres (mm)</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td>centimetres (cm)</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td>metres (m)</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
