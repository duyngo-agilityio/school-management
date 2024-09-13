'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

// Icons
import { BellNotificationIcon } from '@/icons';

// Components
import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import ConfirmModal from '../Modal/ConfirmModal';

// Services
import { logout } from '@/actions';

// Constants
import { ROUTES } from '@/constants';

interface HeaderBarProps {
  children: ReactNode;
  width?: string;
}

const HeaderBar = ({ children, width }: HeaderBarProps) => {
  const router = useRouter();
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();

  const handleLogout = async () => {
    await logout();
    router.replace(ROUTES.SIGN_IN);
  };

  return (
    <>
      {isOpenConfirm && (
        <ConfirmModal
          onClose={onCloseConfirm}
          onSubmit={handleLogout}
          title="Logging Out"
          subTitle="Are you sure you want to log out?"
          labelButton="Logout"
        />
      )}
      <Flex justifyContent="space-between" w={width}>
        {children}
        <Flex alignItems="center">
          <BellNotificationIcon />
          <Button ml="20px" onClick={onOpenConfirm}>
            Log Out
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default HeaderBar;
