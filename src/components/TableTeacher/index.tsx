'use client';

// Libs
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Components
import Table from '../Table';
import Profile from '../Profile';
import { Box, Button, useDisclosure } from '@chakra-ui/react';

// Constants
import { COLUMNS, ROUTES } from '@/constants';

// Types
import { IFiledNameColumns, ITeacher } from '@/types';
import TeacherModal from '../Modal/TeacherModal';
import PenIcon from '@/icons/PenIcon';
import TrashIcon from '@/icons/TrashIcon';

interface TableTeacherProps {
  data: ITeacher[];
}

export const TableTeacher = ({ data }: TableTeacherProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const param = useParams<{ id: string }>();

  const COLUMNS_TEACHER: IFiledNameColumns[] = [
    {
      field: COLUMNS.FIELDS.NAME,
      headerName: COLUMNS.HEADER_NAME.NAME,
      render: ({ fullName, avatar, id }: ITeacher) => {
        return (
          <Link href={`${ROUTES.TEACHER}/${id}`}>
            <Profile src={avatar} title={fullName} variant="xs" />
          </Link>
        );
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
      render: ({ gender }: ITeacher) => {
        const renderGender = gender === 1 ? 'Male' : 'Female';

        return <Box>{renderGender}</Box>;
      },
    },
    {
      field: COLUMNS.FIELDS.ACTION,
      headerName: COLUMNS.HEADER_NAME.ACTION,
      render: ({ id }: ITeacher) => {
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
        <TeacherModal isOpen={isOpen} onClose={onClose} title="Add Teacher" />
      )}
      <Table columns={COLUMNS_TEACHER} data={data} />
    </>
  );
};

export default TableTeacher;
