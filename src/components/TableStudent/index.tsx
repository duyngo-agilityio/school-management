// Components
import Table from '../Table';

// Mocks
import { MOCK_STUDENTS } from '@/mocks';

// Constants
import { COLUMNS_STUDENT } from '@/constants';

const TableStudent = () => {
  return <Table columns={COLUMNS_STUDENT} data={MOCK_STUDENTS} />;
};

export default TableStudent;
