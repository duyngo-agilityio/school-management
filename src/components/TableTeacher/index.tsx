'use client';

// Libs
import { useRouter } from 'next/navigation';

// Components
import Table from '../Table';
import Profile from '../Profile';
import { Button, useDisclosure } from '@chakra-ui/react';
import TeacherModal from '../Modal/TeacherModal';

// Mocks
import { MOCK_TEACHERS } from '@/mocks';

// Constants
import { COLUMNS, ROUTES } from '@/constants';

// Types
import { IStudent } from '@/types';

export const TableTeacher = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { push } = useRouter();

  const COLUMNS_TEACHER = [
    {
      field: COLUMNS.FIELDS.NAME,
      headerName: COLUMNS.HEADER_NAME.NAME,
      render: (_: unknown, { fullName, avatar }: IStudent) => {
        return <Profile src={avatar} title={fullName} variant="xs" />;
      },
    },
    {
      field: COLUMNS.FIELDS.SUBJECT,
      headerName: COLUMNS.HEADER_NAME.SUBJECT,
    },
    {
      field: COLUMNS.FIELDS.CLASS,
      headerName: COLUMNS.HEADER_NAME.CLASS,
    },
    {
      field: COLUMNS.FIELDS.EMAIL,
      headerName: COLUMNS.HEADER_NAME.EMAIL,
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

  const handleClickRow = (id: string) => {
    push(`${ROUTES.TEACHER}/${id}`);
  };

  return (
    <>
      {isOpen && (
        <TeacherModal isOpen={isOpen} onClose={onClose} title="Add Teacher" />
      )}
      <Table
        columns={COLUMNS_TEACHER}
        data={MOCK_TEACHERS}
        onClickRow={handleClickRow}
      />
    </>
  );
};

export default TableTeacher;
