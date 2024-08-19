'use client';

import Link from 'next/link';

// Components
import { Button, useDisclosure } from '@chakra-ui/react';
import Table from '../Table';
import Profile from '../Profile';
import StudentModal from '../Modal/StudentModal';

// Constants
import { COLUMNS, ROUTES } from '@/constants';

// Types
import { IStudent } from '@/types';

interface TableStudentProps {
  data: IStudent[];
}

const TableStudent = ({ data }: TableStudentProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const COLUMNS_STUDENT = [
    {
      field: COLUMNS.FIELDS.NAME,
      headerName: COLUMNS.HEADER_NAME.NAME,
      render: (_: unknown, { fullName, avatar, id }: IStudent) => {
        return (
          <Link href={`${ROUTES.STUDENT}/${id}`} prefetch>
            <Profile src={avatar} title={fullName} variant="xs" />
          </Link>
        );
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
          <Button variant="warning" mr="10px" onClick={onOpen}>
            EDIT
          </Button>
          <Button variant="danger">DELETE</Button>
        </>
      ),
    },
  ];

  return (
    <>
      {isOpen && (
        <StudentModal isOpen={isOpen} onClose={onClose} title="Add Student" />
      )}
      <Table columns={COLUMNS_STUDENT} data={data} />
    </>
  );
};

export default TableStudent;
