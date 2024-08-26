import { renderHook } from '@testing-library/react';

// Hooks
import { useUpload } from '@/hooks';

const mockImage = 'https://example.com/image.jpg';

const selectedFile = new File(['dummy content'], 'example.png', {
  type: 'image/png',
});

// Mock fetch API
global.fetch = jest.fn();

describe('useUploadImage', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('should initialize with uploading state as false and handleUploadImage as a function', () => {
    const { result } = renderHook(() => useUpload());

    expect(result.current.isLoading).toBe(false);
    expect(typeof result.current.handleUploadImage).toBe('function');
  });

  it('should successfully upload an image and return the image data', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: {
          display_url: mockImage,
        },
      }),
    });

    const { result } = renderHook(() => useUpload());
    const { handleUploadImage } = result.current;

    const response = await handleUploadImage(selectedFile);

    expect(response.error).toBeNull();
    expect(response.image).toEqual(mockImage);
  });

  it('should return an error and null image when no file is selected', async () => {
    const selectedFile = null;
    const { result } = renderHook(() => useUpload());
    const { handleUploadImage } = result.current;

    const response = await handleUploadImage(selectedFile);

    expect(response.error).toBeDefined();
    expect(response.image).toBeNull();
  });

  it('should set uploading state to false when there is an error during image upload', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error('Network error'),
    );

    const { result, rerender } = renderHook(() => useUpload());
    const { handleUploadImage } = result.current;

    await handleUploadImage(selectedFile);

    rerender();

    expect(result.current.isLoading).toBe(false);
  });

  it('should return an error when the fetch response is not OK', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: 'Bad Request',
      json: async () => ({}),
    });

    const { result } = renderHook(() => useUpload());
    const { handleUploadImage } = result.current;

    const response = await handleUploadImage(selectedFile);

    expect(response.error).toBeDefined();
    expect(response.error?.message).toContain(
      'Error uploading image: Bad Request',
    );
    expect(response.image).toBeNull();
  });

  it('should return an error and set uploading state to false when an exception occurs during fetch', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error('Network error'),
    );

    const { result, rerender } = renderHook(() => useUpload());
    const { handleUploadImage } = result.current;

    const response = await handleUploadImage(selectedFile);

    rerender();

    expect(response.error).toBeDefined();
    expect(response.error?.message).toContain(
      'Error uploading image: Network error',
    );
    expect(response.image).toBeNull();

    expect(result.current.isLoading).toBe(false);
  });
});
