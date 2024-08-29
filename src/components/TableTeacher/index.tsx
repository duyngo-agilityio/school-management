'use client';

// Libs
import dynamic from 'next/dynamic';

// Libs
import { useParams, useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';

// Components
import Table from '../Table';
import Profile from '../Profile';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
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

// Hooks
import { useDelete } from '@/hooks';

const ConfirmModal = dynamic(() => import('../Modal/ConfirmModal'));

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

  const { push } = useRouter();

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

  const { handleSubmitDelete } = useDelete(deleteTeacher, {
    successMessage: SUCCESS_MESSAGES.DELETE_TEACHER,
    errorMessage: ERROR_MESSAGES.DELETE_TEACHER,
    onCloseConfirmModal,
  });

  const handleDelete = () => {
    handleSubmitDelete(idItem);
  };

  const handleNavigate = (id: string) => {
    push(`${ROUTES.TEACHER}/${id}`);
  };

  const COLUMNS_TEACHER: IFiledNameColumns[] = [
    {
      field: COLUMNS.FIELDS.NAME,
      headerName: COLUMNS.HEADER_NAME.NAME,
      render: ({ fullName, avatar }: ITeacher) => {
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
      render: ({ gender }: ITeacher) => {
        const renderGender = Number(gender) === 1 ? 'Male' : 'Female';

        return <Box>{renderGender}</Box>;
      },
    },
    {
      field: COLUMNS.FIELDS.ACTION,
      headerName: COLUMNS.HEADER_NAME.ACTION,
      type: COLUMNS.TYPE.ACTION,
      render: ({ id }: ITeacher) => {
        const active = param.id === id;

        return (
          <>
            <Button
              variant="none"
              mr="10px"
              aria-label="Edit Button"
              onClick={handleShowEditModal(id)}
            >
              <PenIcon
                stroke={active ? customColors.pure : customColors.emperor}
              />
            </Button>
            <Button
              variant="none"
              aria-label="Delete Button"
              onClick={handleShowConfirmModal(id)}
            >
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
          onClose={onCloseConfirmModal}
          title="Delete Teacher"
          subTitle="Are you sure you want to delete this Teacher?"
          onSubmit={handleDelete}
        />
      )}
      <Table columns={COLUMNS_TEACHER} data={data} onClick={handleNavigate} />
    </>
  );
};

export default TableTeacher;
