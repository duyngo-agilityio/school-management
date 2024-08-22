'use client';

// Libs
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Suspense, useState } from 'react';

// Components
import Table from '../Table';
import Profile from '../Profile';
import { Box, Button, useDisclosure, useToast } from '@chakra-ui/react';
import ConfirmModal from '../Modal/ConfirmModal';
import { TeacherModalWrapper } from '../Modal/Teacher/Wrapper';

// Constants
import {
  COLUMNS,
  customColors,
  ERROR_MESSAGES,
  ROUTES,
  SUCCESS_MESSAGES,
} from '@/constants';

// Types
import { IFiledNameColumns, ITeacher } from '@/types';

// Icons
import { PenIcon, TrashIcon } from '@/icons';

// Services
import { deleteTeacher } from '@/actions';

interface TableTeacherProps {
  data: ITeacher[];
}

export const TableTeacher = ({ data }: TableTeacherProps) => {
  const {
    isOpen: isOpenTeacherModal,
    onOpen: onOpenTeacherModal,
    onClose: onCloseTeacherModal,
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
    onOpenTeacherModal();
  };

  const handleSubmitDelete = async () => {
    const data = await deleteTeacher(idItem);

    if (data) {
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
        const renderGender = Number(gender) === 1 ? 'Male' : 'Female';

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
      {isOpenTeacherModal && (
        <Suspense>
          <TeacherModalWrapper id={idItem} onClose={onCloseTeacherModal} />
        </Suspense>
      )}
      {isOpenConfirmModal && (
        <ConfirmModal
          isOpen={isOpenConfirmModal}
          onClose={onCloseConfirmModal}
          title="Delete Teacher"
          subTitle="Are you sure you want to delete this Teacher?"
          onSubmit={handleSubmitDelete}
        />
      )}
      <Table columns={COLUMNS_TEACHER} data={data} />
    </>
  );
};

export default TableTeacher;
