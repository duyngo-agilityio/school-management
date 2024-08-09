// Components
import Table from '../Table';

// Mocks
import { MOCK_TEACHERS } from '@/mocks';

// Constants
import { COLUMNS_TEACHER } from '@/constants';

const TableTeacher = () => {
  return <Table columns={COLUMNS_TEACHER} data={MOCK_TEACHERS} />;
};

export default TableTeacher;
