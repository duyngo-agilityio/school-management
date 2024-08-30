import { Skeleton, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const TableSkeleton = () => {
  return (
    <Table mt="10px">
      <Thead>
        <Tr>
          {Array(6)
            .fill('')
            .map((_, index) => (
              <Th key={index}>
                <Skeleton height={4} />
              </Th>
            ))}
        </Tr>
      </Thead>
      <Tbody>
        {Array(3)
          .fill('')
          .map((_, rowIndex) => (
            <Tr key={rowIndex}>
              {Array(6)
                .fill('')
                .map((_, colIndex) => (
                  <Td key={colIndex}>
                    <Skeleton height={10} />
                  </Td>
                ))}
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
};

export default TableSkeleton;
