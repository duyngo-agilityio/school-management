'use client';

// Libs
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Components
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import Table from '../Table';
import Profile from '../Profile';
import StudentModal from '../Modal/Student/Modal';

// Constants
import { COLUMNS, ROUTES } from '@/constants';

// Types
import { IStudent } from '@/types';

// Icons
import PenIcon from '@/icons/PenIcon';
import TrashIcon from '@/icons/TrashIcon';

interface TableStudentProps {
  data: IStudent[];
}

const TableStudent = ({ data }: TableStudentProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const param = useParams<{ id: string }>();

  const COLUMNS_STUDENT = [
    {
      field: COLUMNS.FIELDS.NAME,
      headerName: COLUMNS.HEADER_NAME.NAME,
      render: ({ fullName, avatar, id }: IStudent) => {
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
      render: ({ gender }: IStudent) => {
        const renderGender = gender === 1 ? 'Male' : 'Female';

        return <Box>{renderGender}</Box>;
      },
    },
    {
      field: COLUMNS.FIELDS.ACTION,
      headerName: COLUMNS.HEADER_NAME.ACTION,
      render: ({ id }: IStudent) => {
        const active = param.id === id;

        return (
          <>
            <Button variant="none" mr="10px" onClick={onOpen}>
              <PenIcon stroke={active ? 'white' : '#4F4F4F'} />
            </Button>
            <Button variant="none">
              <TrashIcon stroke={active ? 'white' : '#4F4F4F'} />
            </Button>
          </>
        );
      },
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
