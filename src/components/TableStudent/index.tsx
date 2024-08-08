// Components
import { COLUMNS_STUDENT } from '@/constants/columns';
import Table from '../Table';
import { MOCK_STUDENTS } from '@/mocks';

const TableStudent = () => {
  return <Table columns={COLUMNS_STUDENT} data={MOCK_STUDENTS} />;
};

export default TableStudent;
