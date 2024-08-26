import { useState } from 'react';

// Constants
import { IMG_KEY } from '@/constants';

type SuccessImage = {
  error: null;
  image: string;
};

type FailImage = {
  error: Error;
  image: null;
};

export const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadImage = async (
    selectedFile: File | null,
  ): Promise<SuccessImage | FailImage> => {
    if (!selectedFile)
      return {
        error: new Error('Error uploading image'),
        image: null,
      };

    const formData = new FormData();
    formData.append('image', selectedFile);

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMG_KEY}`,
        {
          method: 'POST',
          body: formData,
        },
      );

      if (response.ok) {
        const result = await response.json();
        const image = result?.data?.display_url as string;
        setIsLoading(false);

        return { image, error: null };
      } else {
        setIsLoading(false);

        return {
          error: new Error(`Error uploading image: ${response.statusText}`),
          image: null,
        };
      }
    } catch (error) {
      setIsLoading(false);

      return {
        error: new Error(`Error uploading image: ${(error as Error).message}`),
        image: null,
      };
    }
  };

  return { handleUploadImage, isLoading };
};
