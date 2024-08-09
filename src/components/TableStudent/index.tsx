'use client';

// Components
import { Button } from '@chakra-ui/react';
import Table from '../Table';
import Profile from '../Profile';

// Mocks
import { MOCK_STUDENTS } from '@/mocks';

// Constants
import { COLUMNS } from '@/constants';

// Types
import { IStudent } from '@/types';

export const COLUMNS_STUDENT = [
  {
    field: COLUMNS.FIELDS.NAME,
    headerName: COLUMNS.HEADER_NAME.NAME,
    render: (_: unknown, { fullName, avatar }: IStudent) => {
      return <Profile src={avatar} title={fullName} variant="xs" />;
    },
  },
  {
    field: COLUMNS.FIELDS.ID,
    headerName: COLUMNS.HEADER_NAME.STUDENT_ID,
  },
  {
    field: COLUMNS.FIELDS.EMAIL,
    headerName: COLUMNS.HEADER_NAME.EMAIL,
  },
  {
    field: COLUMNS.FIELDS.CLASS,
    headerName: COLUMNS.HEADER_NAME.CLASS,
  },
  {
    field: COLUMNS.FIELDS.GENDER,
    headerName: COLUMNS.HEADER_NAME.GENDER,
  },
  {
    field: COLUMNS.FIELDS.ACTION,
    headerName: COLUMNS.HEADER_NAME.ACTION,
    render: () => (
      <>
        <Button variant="warning" mr="10px">
          EDIT
        </Button>
        <Button variant="danger">DELETE</Button>
      </>
    ),
  },
];

const TableStudent = () => {
  return <Table columns={COLUMNS_STUDENT} data={MOCK_STUDENTS} />;
};

export default TableStudent;