import { useToast } from '@chakra-ui/react';

type DeleteFunc = (id: string) => Promise<boolean>;

interface DeleteOptions {
  successMessage: string;
  errorMessage: string;
  onCloseConfirmModal: () => void;
}

export const useDelete = (deleteFunc: DeleteFunc, options: DeleteOptions) => {
  const { errorMessage, successMessage, onCloseConfirmModal } = options;

  const toast = useToast();

  const handleSubmitDelete = async (id: string) => {
    onCloseConfirmModal();

    const isSuccess = await deleteFunc(id);

    toast({
      title: isSuccess ? successMessage : errorMessage,
      status: isSuccess ? 'success' : 'error',
    });
  };

  return { handleSubmitDelete };
};
