'use client';

// Libs
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { Suspense, useState } from 'react';

// Components
import { Box, Button, useDisclosure, useToast } from '@chakra-ui/react';
import Table from '../Table';
import Profile from '../Profile';

// Constants
import {
  COLUMNS,
  customColors,
  ERROR_MESSAGES,
  ROUTES,
  SUCCESS_MESSAGES,
} from '@/constants';

// Types
import { IStudent } from '@/types';

// Icons
import PenIcon from '@/icons/PenIcon';
import TrashIcon from '@/icons/TrashIcon';

// Services
import { deleteStudent } from '@/actions';
import StudentModalWrapper from '../Modal/Student/Wrapper';

const ConfirmModal = dynamic(() => import('../Modal/ConfirmModal'));

interface TableStudentProps {
  data: IStudent[];
}

const TableStudent = ({ data }: TableStudentProps) => {
  const {
    isOpen: isOpenStudentModal,
    onOpen: onOpenStudentModal,
    onClose: onCloseStudentModal,
  } = useDisclosure();
  const {
    isOpen: isOpenConfirmModal,
    onOpen: onOpenConfirmModal,
    onClose: onCloseConfirmModal,
  } = useDisclosure();
  const toast = useToast();

  const param = useParams<{ id: string }>();

  const [idItem, setIdItem] = useState<string>('');

  const handleShowConfirmModal = (id: string) => () => {
    setIdItem(id);
    onOpenConfirmModal();
  };

  const handleShowEditModal = (id: string) => () => {
    setIdItem(id);
    onOpenStudentModal();
  };

  const handleSubmitDelete = async () => {
    const isSuccess = await deleteStudent(idItem);

    if (isSuccess) {
      onCloseConfirmModal();

      toast({
        title: SUCCESS_MESSAGES.DELETE_TEACHER,
        status: 'success',
      });
    } else {
      toast({
        title: ERROR_MESSAGES.DELETE_TEACHER,
        status: 'error',
      });
    }
  };

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
            <Button variant="none" mr="10px" onClick={handleShowEditModal(id)}>
              <PenIcon
                stroke={active ? customColors.pure : customColors.emperor}
              />
            </Button>
            <Button variant="none" onClick={handleShowConfirmModal(id)}>
              <TrashIcon
                stroke={active ? customColors.pure : customColors.emperor}
              />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      {isOpenStudentModal && (
        <Suspense>
          <StudentModalWrapper id={idItem} onClose={onCloseStudentModal} />
        </Suspense>
      )}
      {isOpenConfirmModal && (
        <ConfirmModal
          onClose={onCloseConfirmModal}
          onSubmit={handleSubmitDelete}
          title="Delete Student"
          subTitle="Are you sure you want to delete this Student?"
        />
      )}
      <Table columns={COLUMNS_STUDENT} data={data} />
    </>
  );
};

export default TableStudent;
