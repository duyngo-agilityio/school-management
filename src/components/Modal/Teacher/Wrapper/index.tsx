// Components
import { getTeacherById } from '@/services';
import TeacherModal from '../Modal';

interface TeacherModalWrapperProps {
  id: string;
  onClose: () => void;
}

export const TeacherModalWrapper = async ({
  id,
  onClose,
}: TeacherModalWrapperProps) => {
  const data = await getTeacherById(id);

  return <TeacherModal defaultValues={data} isOpen onClose={onClose} />;
};
