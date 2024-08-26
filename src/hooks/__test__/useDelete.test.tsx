import { useToast } from '@chakra-ui/react';
import { useDelete } from '../useDelete';
import { act, renderHook } from '@testing-library/react';

jest.mock('@chakra-ui/react', () => ({
  useToast: jest.fn(),
}));

describe('useDelete', () => {
  const mockDeleteFunc = jest.fn();
  const mockOnCloseConfirmModal = jest.fn();
  const mockToast = jest.fn();

  beforeEach(() => {
    mockDeleteFunc.mockReset();
    mockOnCloseConfirmModal.mockReset();
    mockToast.mockReset();
    (useToast as jest.Mock).mockReturnValue(mockToast);
  });

  it('should call deleteFunc, close modal, and show success toast on success', async () => {
    const options = {
      successMessage: 'Item deleted successfully',
      errorMessage: 'Failed to delete item',
      onCloseConfirmModal: mockOnCloseConfirmModal,
    };

    mockDeleteFunc.mockResolvedValue(true);

    const { result } = renderHook(() => useDelete(mockDeleteFunc, options));

    await act(async () => {
      await result.current.handleSubmitDelete('item-id');
    });

    expect(mockDeleteFunc).toHaveBeenCalledWith('item-id');
    expect(mockOnCloseConfirmModal).toHaveBeenCalled();
    expect(mockToast).toHaveBeenCalledWith({
      title: 'Item deleted successfully',
      status: 'success',
    });
  });

  it('should call deleteFunc, close modal, and show error toast on failure', async () => {
    const options = {
      successMessage: 'Item deleted successfully',
      errorMessage: 'Failed to delete item',
      onCloseConfirmModal: mockOnCloseConfirmModal,
    };

    mockDeleteFunc.mockResolvedValue(false);

    const { result } = renderHook(() => useDelete(mockDeleteFunc, options));

    await act(async () => {
      await result.current.handleSubmitDelete('item-id');
    });

    expect(mockDeleteFunc).toHaveBeenCalledWith('item-id');
    expect(mockOnCloseConfirmModal).toHaveBeenCalled();
    expect(mockToast).toHaveBeenCalledWith({
      title: 'Failed to delete item',
      status: 'error',
    });
  });
});
