import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

// Hooks
import UploadImage from '..';


const mockHandleUploadImage = jest.fn();

// Mock the useUpload hook
jest.mock('@/hooks', () => ({
  useUpload: jest.fn().mockImplementation(() => ({
    isLoading: false,
    handleUploadImage: mockHandleUploadImage,
  })),
}));

describe('UploadImage Component', () => {
  const defaultProps = {
    title: 'Upload Image',
    height: '200px',
    width: '200px',
    alt: 'Uploaded Image',
    name: 'test-image',
    onChange: jest.fn(),
    onRemove: jest.fn(),
  };

  let container: ReturnType<typeof render>;

  beforeEach(() => {
    container = render(<UploadImage {...defaultProps} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders match snapshot', () => {
    expect(container.container).toMatchSnapshot();
  });

  it('handles image upload and calls onChange', async () => {
    const file = new File(['dummy content'], 'example.png', {
      type: 'image/png',
    });

    const dataImage = {
      image: { name: 'example.png', url: 'http://example.com/image.png' },
    };

    mockHandleUploadImage.mockResolvedValue(dataImage);

    const uploadButton = container.getByText('Upload Image');
    fireEvent.click(uploadButton);

    const input = container.getByTestId('upload') as HTMLInputElement;
    fireEvent.change(input, { target: { files: [file] } });

    expect(mockHandleUploadImage).toHaveBeenCalledWith(file);
  });

  it('handles image removal and calls onRemove', () => {
    const propsWithImage = {
      ...defaultProps,
      src: 'http://example.com/image.png',
    };

    render(<UploadImage {...propsWithImage} />);

    const deleteButton = screen.getByLabelText('delete-icon');
    fireEvent.click(deleteButton);

    expect(defaultProps.onRemove).toHaveBeenCalledWith('test-image');
    expect(screen.queryByAltText('Uploaded Image')).not.toBeInTheDocument();
  });

  it('displays a toast on upload failure', async () => {
    const file = new File(['dummy content'], 'example.png', {
      type: 'image/png',
    });
    mockHandleUploadImage.mockResolvedValue({
      error: {
        name: 'upload error',
        message: 'Upload image fail',
      },
    });

    const uploadButton = container.getByText('Upload Image');
    fireEvent.click(uploadButton);

    const input = container.getByTestId('upload') as HTMLInputElement;
    fireEvent.change(input, { target: { files: [file] } });

    waitFor(() => {
      expect(container.getByText('Upload image fail')).toBeInTheDocument();
    });
  });
});
